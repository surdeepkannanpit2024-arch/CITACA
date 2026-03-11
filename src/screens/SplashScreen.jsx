import React from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from '../assets/student-loading.json'

export default function SplashScreen() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-cit-yellow to-cit-gold flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Animation and Text */}
      <div className="relative z-10 text-center animate-fade-in flex flex-col items-center">
        <Lottie 
          animationData={loadingAnimation} 
          loop={true} 
          className="w-80 h-80 drop-shadow-2xl mb-4" 
        />
        
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md tracking-tight">CIT Chennai</h1>
        <p className="text-xl text-white opacity-90 mb-8 drop-shadow">College Dashboard</p>

        <div className="px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
          <p className="text-white font-semibold text-sm tracking-widest uppercase animate-pulse">Loading Platform</p>
        </div>
      </div>
    </div>
  )
}
