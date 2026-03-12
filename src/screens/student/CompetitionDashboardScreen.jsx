import React, { useState } from 'react'
import { ArrowLeft, CheckCircle2, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CompetitionDashboardScreen({ onLogout }) {
  const navigate = useNavigate()
  const [registeredIds, setRegisteredIds] = useState([])
  const [loadingId, setLoadingId] = useState(null)

  const competitions = [
    { id: 1, name: 'Hackathon 2024', date: 'Mar 30 - Apr 1', prize: '₹50,000', status: 'Registering' },
    { id: 2, name: 'Code Clash', date: 'Apr 5', prize: '₹20,000', status: 'Open' },
    { id: 3, name: 'AI Innovation Challenge', date: 'Apr 15 - 22', prize: '₹75,000', status: 'Coming Soon' },
  ]

  const handleRegister = (id) => {
    setLoadingId(id)
    setTimeout(() => {
      setRegisteredIds([...registeredIds, id])
      setLoadingId(null)
    }, 1500)
  }

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
            <div key={comp.id} className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-cit-dark text-lg">{comp.name}</h3>
                  <p className="text-sm text-gray-400 font-medium">📅 {comp.date}</p>
                </div>
                {!registeredIds.includes(comp.id) && (
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    comp.status === 'Registering' ? 'bg-green-100 text-green-800' :
                    comp.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {comp.status}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-cit-yellow font-bold text-sm mb-4">
                <Trophy className="w-4 h-4" /> {comp.prize} Prize Pool
              </div>

              {registeredIds.includes(comp.id) ? (
                <div className="w-full bg-green-50 text-green-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-green-100">
                  <CheckCircle2 className="w-5 h-5" /> Registered
                </div>
              ) : (
                <button
                  onClick={() => handleRegister(comp.id)}
                  disabled={loadingId === comp.id || comp.status === 'Coming Soon'}
                  className={`w-full font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center ${
                    comp.status === 'Coming Soon'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-cit-yellow text-cit-dark hover:scale-[1.02]'
                  }`}
                >
                  {loadingId === comp.id ? (
                    <div className="w-5 h-5 border-2 border-cit-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    comp.status === 'Coming Soon' ? 'Stay Tuned' : 'Register Now'
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
