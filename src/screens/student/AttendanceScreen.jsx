import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AttendanceScreen({ onLogout }) {
  const navigate = useNavigate()

  const attendanceData = [
    { date: 'Week 1', percentage: 85 },
    { date: 'Week 2', percentage: 90 },
    { date: 'Week 3', percentage: 92 },
    { date: 'Week 4', percentage: 88 },
    { date: 'Week 5', percentage: 95 },
  ]

  const subjects = [
    { id: 1, name: 'Data Structures', attendance: 95, classes: 20, present: 19 },
    { id: 2, name: 'Web Development', attendance: 90, classes: 20, present: 18 },
    { id: 3, name: 'Database Systems', attendance: 88, classes: 20, present: 17 },
    { id: 4, name: 'Algorithms', attendance: 92, classes: 20, present: 18 },
  ]

  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 75) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Attendance</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Overall Attendance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-cit-dark mb-4">Overall Attendance: 92%</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="percentage" stroke="#FFD700" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Subject-wise Attendance */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Subject-wise Attendance</h2>
        <div className="space-y-3">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-cit-dark">{subject.name}</h3>
                <span className={`text-lg font-bold ${getAttendanceColor(subject.attendance)}`}>
                  {subject.attendance}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-cit-yellow h-full transition-all duration-300"
                  style={{ width: `${subject.attendance}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">{subject.present}/{subject.classes} classes attended</p>
            </div>
          ))}
        </div>

        {/* Attendance Policy */}
        <div className="bg-blue-50 rounded-xl p-4 mt-8 border-2 border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">📋 Attendance Policy</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Minimum 75% attendance required to appear in exams</li>
            <li>• Medical certificates can be submitted for excused absences</li>
            <li>• Check with your faculty for attendance status updates</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
