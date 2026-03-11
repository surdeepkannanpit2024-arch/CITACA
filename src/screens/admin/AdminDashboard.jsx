import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User } from 'lucide-react'

export default function AdminDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">Admin Portal</h1>
            <p className="text-sm text-cit-dark/80">System Management</p>
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
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-cit-yellow">2400</div>
            <div className="text-xs text-gray-600 mt-1">Total Students</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600">85</div>
            <div className="text-xs text-gray-600 mt-1">Faculty Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-xs text-gray-600 mt-1">Departments</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600">45</div>
            <div className="text-xs text-gray-600 mt-1">Admins</div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition text-left">
            <div className="font-semibold text-cit-dark">👥 User Management</div>
            <div className="text-xs text-gray-600 mt-1">Add, edit, or remove users</div>
          </button>
          <button className="w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition text-left">
            <div className="font-semibold text-cit-dark">🔐 System Settings</div>
            <div className="text-xs text-gray-600 mt-1">Configure system parameters</div>
          </button>
          <button className="w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition text-left">
            <div className="font-semibold text-cit-dark">📊 Reports</div>
            <div className="text-xs text-gray-600 mt-1">Generate analytics and reports</div>
          </button>
          <button className="w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition text-left">
            <div className="font-semibold text-cit-dark">📢 Announcements</div>
            <div className="text-xs text-gray-600 mt-1">Post global messages</div>
          </button>
        </div>
      </div>
    </div>
  )
}
