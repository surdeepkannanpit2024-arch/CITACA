import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CompetitionDashboardScreen({ onLogout }) {
  const navigate = useNavigate()
  const competitions = [
    { id: 1, name: 'Hackathon 2024', date: 'Mar 30 - Apr 1', prize: '₹50,000', status: 'Registering' },
    { id: 2, name: 'Code Clash', date: 'Apr 5', prize: '₹20,000', status: 'Open' },
    { id: 3, name: 'AI Innovation Challenge', date: 'Apr 15 - 22', prize: '₹75,000', status: 'Coming Soon' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Competitions</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {competitions.map((comp) => (
            <div key={comp.id} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-cit-dark text-lg">{comp.name}</h3>
                  <p className="text-sm text-gray-600">📅 {comp.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  comp.status === 'Registering' ? 'bg-green-100 text-green-800' :
                  comp.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {comp.status}
                </span>
              </div>
              <div className="text-cit-yellow font-bold mb-3">🏆 {comp.prize} Prize Pool</div>
              <button className="w-full bg-cit-yellow text-cit-dark font-semibold py-2 rounded-lg hover:shadow-lg transition">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
