import React, { useState } from 'react'
import { ArrowLeft, Plus, Clock, Users, ChevronRight, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AssignmentsScreen({ onLogout }) {
  const navigate = useNavigate()
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Stack Implementation', subject: 'Data Structures', dueDate: '2024-03-20', submissions: 24, total: 60 },
    { id: 2, title: 'Network Protocol Report', subject: 'Computer Networks', dueDate: '2024-03-25', submissions: 10, total: 60 },
    { id: 3, title: 'OS Process Simulation', subject: 'Operating Systems', dueDate: '2024-03-18', submissions: 45, total: 60 },
  ])

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <ArrowLeft className="w-6 h-6 text-cit-dark" />
            </button>
            <h1 className="text-xl font-bold text-cit-dark">Assignments</h1>
          </div>
          <button className="bg-cit-dark text-white p-2 rounded-lg shadow-lg">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="bg-cit-yellow/10 text-cit-yellow text-[10px] font-bold uppercase px-2 py-1 rounded">
                    {assignment.subject}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-red-500 font-bold">
                    <Clock className="w-3 h-3" /> Due {assignment.dueDate}
                  </div>
                </div>
                <h3 className="font-bold text-cit-dark text-lg mb-4">{assignment.title}</h3>
                
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Users className="w-5 h-5 text-cit-yellow" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-cit-dark">{assignment.submissions}/{assignment.total}</div>
                      <div className="text-[10px] text-gray-500 font-medium">Submissions</div>
                    </div>
                  </div>
                  <button className="text-cit-yellow font-bold text-sm flex items-center gap-1">
                    Manage <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="h-1 bg-gray-100">
                <div 
                  className="h-full bg-cit-yellow transition-all duration-1000" 
                  style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action CTA */}
        <button className="mt-8 w-full bg-white border-2 border-dashed border-gray-300 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-cit-yellow hover:bg-cit-yellow/5 transition group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-cit-yellow/20 transition">
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-cit-yellow" />
          </div>
          <span className="font-bold text-gray-500 group-hover:text-cit-yellow">Create New Assignment</span>
        </button>
      </div>
    </div>
  )
}
