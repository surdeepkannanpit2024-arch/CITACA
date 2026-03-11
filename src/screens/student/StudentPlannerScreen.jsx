import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function ScreenTemplate({ title, icon, onLogout }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">{title}</h1>
        </div>
      </div>
      <div className="max-w-md mx-auto px-4 py-6 text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-xl font-bold text-cit-dark mb-2">{title}</h2>
        <p className="text-gray-600">Feature coming soon</p>
      </div>
    </div>
  )
}

export default function StudentPlannerScreen({ onLogout }) {
  return <ScreenTemplate title="Academic Planner" icon="📅" onLogout={onLogout} />
}
