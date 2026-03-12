import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User, Users, FileText, Calendar, PieChart, TrendingUp } from 'lucide-react'

export default function HodDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const stats = [
    { label: 'Faculty', value: '85', icon: Users, color: 'text-blue-600' },
    { label: 'Students', value: '2400', icon: Users, color: 'text-green-600' },
    { label: 'Courses', value: '42', icon: FileText, color: 'text-purple-600' },
    { label: 'Attendance', value: '94%', icon: TrendingUp, color: 'text-orange-600' },
  ]

  const actions = [
    { title: 'Faculty Attendance', icon: Calendar, desc: 'Review daily reports' },
    { title: 'Department Results', icon: PieChart, desc: 'Analyze semester marks' },
    { title: 'Syllabus Coverage', icon: FileText, desc: 'Track academic progress' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">HOD Dashboard</h1>
            <p className="text-sm text-cit-dark/80">Computer Science Dept</p>
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
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-cit-dark">{stat.value}</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Department Actions</h2>
        <div className="space-y-4">
          {actions.map((action, i) => (
            <button key={i} className="w-full bg-white p-4 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition text-left group">
              <div className="w-12 h-12 bg-cit-yellow/10 rounded-full flex items-center justify-center text-cit-yellow group-hover:bg-cit-yellow group-hover:text-cit-dark transition">
                <action.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-cit-dark">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Alerts Card */}
        <div className="mt-8 bg-cit-dark text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cit-yellow/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <h3 className="text-lg font-bold mb-2">Pending Approvals</h3>
          <p className="text-cit-yellow/80 text-sm mb-4">You have 4 substitution requests and 2 leave applications pending.</p>
          <button className="bg-cit-yellow text-cit-dark px-6 py-2 rounded-xl font-bold text-sm">
            Review Now
          </button>
        </div>
      </div>
    </div>
  )
}
