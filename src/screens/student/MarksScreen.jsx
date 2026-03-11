import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function MarksScreen({ onLogout }) {
  const navigate = useNavigate()

  const semesterData = [
    { semester: 'Sem 1', percentage: 78 },
    { semester: 'Sem 2', percentage: 82 },
    { semester: 'Sem 3', percentage: 85 },
    { semester: 'Sem 4', percentage: 88 },
    { semester: 'Sem 5', percentage: 90 },
  ]

  const currentMarks = [
    { id: 1, subject: 'Data Structures', internals: 35, test1: 18, test2: 19, project: 8.5 },
    { id: 2, subject: 'Web Development', internals: 38, test1: 19, test2: 20, project: 9 },
    { id: 3, subject: 'Database Systems', internals: 32, test1: 16, test2: 17, project: 8 },
    { id: 4, subject: 'Algorithms', internals: 36, test1: 18, test2: 19, project: 9 },
  ]

  const getGradeColor = (marks) => {
    if (marks >= 90) return 'bg-green-100 text-green-800 border-green-300'
    if (marks >= 80) return 'bg-blue-100 text-blue-800 border-blue-300'
    if (marks >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    return 'bg-red-100 text-red-800 border-red-300'
  }

  const getGrade = (marks) => {
    if (marks >= 90) return 'A+'
    if (marks >= 80) return 'A'
    if (marks >= 70) return 'B'
    if (marks >= 60) return 'C'
    return 'D'
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Academic Marks</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Current GPA Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 text-center">
          <div className="text-4xl font-bold text-cit-yellow mb-2">3.8</div>
          <div className="text-gray-600">Current GPA (out of 4.0)</div>
          <div className="mt-4 text-sm text-gray-500">Last Updated: Today</div>
        </div>

        {/* Semester Progress */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Semester Progress</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={semesterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#FFD700" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Current Subject Marks */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Current Semester Marks</h2>
        <div className="space-y-4">
          {currentMarks.map((subject) => {
            const total = subject.internals + subject.test1 + subject.test2 + subject.project
            const percentage = (total / 100) * 100
            return (
              <div key={subject.id} className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-cit-dark flex-1">{subject.subject}</h3>
                  <span
                    className={`px-3 py-1 rounded-full font-bold text-sm border-2 ${getGradeColor(
                      percentage
                    )}`}
                  >
                    {getGrade(percentage)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-600">Internals</div>
                    <div className="font-bold text-cit-yellow">{subject.internals}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-600">Test 1</div>
                    <div className="font-bold text-cit-yellow">{subject.test1}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-600">Test 2</div>
                    <div className="font-bold text-cit-yellow">{subject.test2}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-600">Project</div>
                    <div className="font-bold text-cit-yellow">{subject.project}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-cit-yellow h-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-right">{percentage.toFixed(1)}%</p>
              </div>
            )
          })}
        </div>

        {/* Grade Scale Info */}
        <div className="bg-purple-50 rounded-xl p-4 mt-8 border-2 border-purple-200">
          <h3 className="font-bold text-purple-900 mb-3">📊 Grade Scale</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-purple-800">
            <div>A+ (90-100)</div>
            <div>A (80-89)</div>
            <div>B (70-79)</div>
            <div>C (60-69)</div>
            <div>D (50-59)</div>
            <div>F (&lt;50)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
