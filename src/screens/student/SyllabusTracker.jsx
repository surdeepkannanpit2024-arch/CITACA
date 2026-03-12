import React, { useState } from 'react'
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SyllabusTracker({ onLogout }) {
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: 'Data Structures',
      progress: 60,
      units: [
        { id: 11, title: 'Introduction to Algorithms', completed: true },
        { id: 12, title: 'Linear Data Structures', completed: true },
        { id: 13, title: 'Trees and Graphs', completed: true },
        { id: 14, title: 'Searching and Sorting', completed: false },
        { id: 15, title: 'Hashing Techniques', completed: false },
      ],
    },
    {
      id: 2,
      name: 'Computer Networks',
      progress: 40,
      units: [
        { id: 21, title: 'Physical Layer', completed: true },
        { id: 22, title: 'Data Link Layer', completed: true },
        { id: 23, title: 'Network Layer', completed: false },
        { id: 24, title: 'Transport Layer', completed: false },
        { id: 25, title: 'Application Layer', completed: false },
      ],
    },
    {
      id: 3,
      name: 'Operating Systems',
      progress: 80,
      units: [
        { id: 31, title: 'Processes and Threads', completed: true },
        { id: 32, title: 'CPU Scheduling', completed: true },
        { id: 33, title: 'Memory Management', completed: true },
        { id: 34, title: 'File Systems', completed: true },
        { id: 35, title: 'I/O Systems', completed: false },
      ],
    },
  ])

  const toggleUnit = (subjectId, unitId) => {
    setSubjects((prev) =>
      prev.map((sub) => {
        if (sub.id === subjectId) {
          const updatedUnits = sub.units.map((unit) =>
            unit.id === unitId ? { ...unit, completed: !unit.completed } : unit
          )
          const completedCount = updatedUnits.filter((u) => u.completed).length
          const newProgress = Math.round((completedCount / updatedUnits.length) * 100)
          return { ...sub, units: updatedUnits, progress: newProgress }
        }
        return sub
      })
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Syllabus Tracker</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-6">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-cit-dark">{subject.name}</h3>
                  <div className="text-xs text-gray-500 mt-1">{subject.progress}% Completed</div>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-cit-yellow h-2 rounded-full transition-all duration-500"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {subject.units.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => toggleUnit(subject.id, unit.id)}
                    className="w-full flex items-center gap-3 text-left group"
                  >
                    {unit.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 group-hover:text-cit-yellow flex-shrink-0" />
                    )}
                    <span className={`text-sm ${unit.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                      {unit.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
