import React, { useState } from 'react'
import { ArrowLeft, Plus, Calendar, CheckCircle2, Circle, Clock, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function StudentPlannerScreen({ onLogout }) {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Submit DS Assignment', date: '2024-03-15', priority: 'high', completed: false },
    { id: 2, title: 'Maths Quiz Prep', date: '2024-03-12', priority: 'medium', completed: true },
    { id: 3, title: 'Library Book Return', date: '2024-03-14', priority: 'low', completed: false },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (!newTask.trim()) return
    const task = {
      id: Date.now(),
      title: newTask,
      date: new Date().toISOString().split('T')[0],
      priority: 'medium',
      completed: false
    }
    setTasks([task, ...tasks])
    setNewTask('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Academic Planner</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Quick Add */}
        <form onSubmit={addTask} className="mb-6 flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            className="flex-1 px-4 py-3 rounded-xl border-2 border-transparent focus:border-cit-yellow outline-none bg-white shadow-md"
          />
          <button type="submit" className="bg-cit-yellow p-3 rounded-xl shadow-md hover:scale-105 transition">
            <Plus className="w-6 h-6" />
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={`bg-white p-4 rounded-2xl shadow-md border-l-4 transition-all ${
                task.priority === 'high' ? 'border-red-500' : 
                task.priority === 'medium' ? 'border-orange-500' : 'border-blue-500'
              } ${task.completed ? 'opacity-60' : ''}`}
            >
              <div className="flex items-center gap-4">
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300" />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className={`font-bold ${task.completed ? 'line-through text-gray-400' : 'text-cit-dark'}`}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {task.date}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full uppercase font-bold ${
                      task.priority === 'high' ? 'bg-red-100 text-red-600' : 
                      task.priority === 'medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
                <button onClick={() => deleteTask(task.id)} className="text-gray-300 hover:text-red-500 transition">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
