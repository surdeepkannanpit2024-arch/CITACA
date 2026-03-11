import React, { useState } from 'react'
import { ArrowLeft, Edit2, LogOut, Save } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProfileScreen({ role, onLogout }) {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@cit.edu.in',
    phone: '+91 98765 43210',
    department: 'Computer Science',
    batch: '2023-2027',
    roll: 'CS21001',
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save profile changes
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Profile</h1>
          <button onClick={onLogout} className="p-2 hover:bg-white/20 rounded-lg transition">
            <LogOut className="w-6 h-6 text-cit-dark" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Avatar */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-cit-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-5xl">👤</span>
          </div>
          <h2 className="text-2xl font-bold text-cit-dark">{profile.name}</h2>
          <p className="text-gray-600">{role.charAt(0).toUpperCase() + role.slice(1)}</p>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 mb-6">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-cit-yellow rounded-lg focus:outline-none"
                />
              ) : (
                <p className="text-lg font-medium text-cit-dark">{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex-1 bg-cit-yellow text-cit-dark font-bold py-3 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-cit-yellow text-cit-dark font-bold py-3 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <Edit2 className="w-5 h-5" />
              Edit Profile
            </button>
          )}
        </div>

        {/* Settings Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-cit-dark mb-4">Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-cit-yellow" />
              <span className="ml-3 text-gray-700">Push Notifications</span>
            </label>
            <label className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-cit-yellow" />
              <span className="ml-3 text-gray-700">Email Updates</span>
            </label>
            <label className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-cit-yellow" />
              <span className="ml-3 text-gray-700">Dark Mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
