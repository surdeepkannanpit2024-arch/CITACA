import React, { useState } from 'react'
import { ArrowLeft, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import botAnimation from '../../assets/bot-animation.json'

export default function AIChatbotScreen({ onLogout }) {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text: 'I can help you with academic queries, schedule information, and more!', sender: 'bot' },
        ])
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <ArrowLeft className="w-6 h-6 text-cit-dark" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                <Lottie animationData={botAnimation} loop={true} className="w-10 h-10" />
              </div>
              <h1 className="text-xl font-bold text-cit-dark">AI Assistant</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full flex-1 px-4 py-6 flex flex-col">
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-cit-yellow text-cit-dark rounded-br-none'
                    : 'bg-white text-cit-dark rounded-bl-none shadow-lg'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 border-2 border-cit-yellow rounded-lg focus:outline-none bg-white"
          />
          <button onClick={handleSend} className="bg-cit-yellow text-cit-dark p-3 rounded-lg hover:shadow-lg transition">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
