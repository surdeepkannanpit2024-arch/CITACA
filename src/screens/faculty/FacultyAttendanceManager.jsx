import React, { useState } from 'react'
import { ArrowLeft, Save, UserCheck, UserX, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function FacultyAttendanceManager({ onLogout }) {
  const navigate = useNavigate()
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', roll: 'CS21001', present: true },
    { id: 2, name: 'Jane Smith', roll: 'CS21002', present: true },
    { id: 3, name: 'Mike Ross', roll: 'CS21003', present: false },
    { id: 4, name: 'Harvey Specter', roll: 'CS21004', present: true },
    { id: 5, name: 'Louis Litt', roll: 'CS21005', present: false },
  ])
  const [search, setSearch] = useState('')

  const toggleAttendance = (id) => {
    setStudents(students.map(s => s.id === id ? { ...s, present: !s.present } : s))
  }

  const handleSave = () => {
    alert('Attendance saved successfully!')
    navigate(-1)
  }

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.roll.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <ArrowLeft className="w-6 h-6 text-cit-dark" />
            </button>
            <h1 className="text-xl font-bold text-cit-dark">Attendance</h1>
          </div>
          <button onClick={handleSave} className="flex items-center gap-2 bg-cit-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
            <Save className="w-4 h-4" /> Save
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student or roll no..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-cit-yellow outline-none bg-white shadow-md"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-md text-center">
            <div className="text-2xl font-bold text-green-600">{students.filter(s => s.present).length}</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Present</div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-md text-center">
            <div className="text-2xl font-bold text-red-600">{students.filter(s => !s.present).length}</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Absent</div>
          </div>
        </div>

        {/* Student List */}
        <div className="space-y-3">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-2xl shadow-md flex items-center justify-between border border-gray-100">
              <div>
                <h3 className="font-bold text-cit-dark">{student.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{student.roll}</p>
              </div>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  student.present 
                  ? 'bg-green-100 text-green-600 border-2 border-green-200' 
                  : 'bg-red-100 text-red-600 border-2 border-red-200'
                }`}
              >
                {student.present ? <UserCheck className="w-4 h-4" /> : <UserX className="w-4 h-4" />}
                {student.present ? 'Present' : 'Absent'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
