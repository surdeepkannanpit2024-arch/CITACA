import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User, Activity, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function ParentDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const childData = {
    name: 'Alice Doe',
    roll: 'CS21001',
    attendance: 92,
    gpa: 3.8,
    lastAssignment: 'Database Systems (A)',
    nextExam: 'Mar 25 - OS',
  }

  const alerts = [
    { id: 1, type: 'info', text: 'Mid-term results for Sem 4 are now available.' },
    { id: 2, type: 'success', text: 'Alice attended 100% of classes this week.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">Parent Portal</h1>
            <p className="text-sm text-cit-dark/80">{childData.name}'s Progress</p>
          </div>
          <button className="p-2 hover:bg-white/20 rounded-lg transition mr-2">
            <Bell className="w-6 h-6 text-cit-dark" />
          </button>
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <Menu className="w-6 h-6 text-cit-dark" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden w-48">
                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-cit-dark">
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-red-600 text-left"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-md text-center border border-gray-100">
            <div className="text-3xl font-bold text-cit-yellow">{childData.attendance}%</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Attendance</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-md text-center border border-gray-100">
            <div className="text-3xl font-bold text-green-600">{childData.gpa}</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">GPA (Sem 4)</div>
          </div>
        </div>

        {/* Recent Performance */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6 border border-gray-100">
          <h3 className="font-bold text-cit-dark mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cit-yellow" />
            Recent Performance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm text-gray-600">Last Assignment</span>
              <span className="text-sm font-bold text-cit-dark">{childData.lastAssignment}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Upcoming Exam</span>
              <span className="text-sm font-bold text-red-500">{childData.nextExam}</span>
            </div>
          </div>
        </div>

        {/* Notifications/Alerts */}
        <h3 className="font-bold text-cit-dark mb-4 px-1">Alerts & Messages</h3>
        <div className="space-y-3 mb-8">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-xl flex items-start gap-3 border ${
              alert.type === 'info' ? 'bg-blue-50 border-blue-100 text-blue-800' : 'bg-green-50 border-green-100 text-green-800'
            }`}>
              {alert.type === 'info' ? <AlertCircle className="w-5 h-5 flex-shrink-0" /> : <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
              <p className="text-sm font-medium">{alert.text}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full bg-cit-dark text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-cit-dark/90 transition transform active:scale-95">
          <BookOpen className="w-5 h-5" />
          Request Parent-Teacher Meeting
        </button>
      </div>
    </div>
  )
}
