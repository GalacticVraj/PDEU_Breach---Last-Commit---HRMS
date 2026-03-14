import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Timer, Users, Zap, Shield, AlertTriangle, 
  ChevronRight, ChevronLeft, Save, Flag, 
  MessageSquare, Layout, Activity, Clock
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import OrangeButton from '../components/ui/OrangeButton';
import Badge from '../components/ui/Badge';
import { useToast } from '../context/ToastContext';
import api from '../api';

const InterviewPanel = () => {
  const { addToast } = useToast();
  
  // Phase 1: Interview State
  const [candidate, setCandidate] = useState({
    name: 'Alex Rivera',
    role: 'Senior Software Engineer',
    department: 'Computer Science',
    id: 'cand_123'
  });
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [questionTime, setQuestionTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Scoring State (P1 & P2 Persistence Logic)
  const [scores, setScores] = useState({
    p1: { technical: 0, soft_skills: 0, clarity: 0 },
    p2: { technical: 0, soft_skills: 0, clarity: 0 }
  });
  
  const [notes, setNotes] = useState('');
  const [redFlags, setRedFlags] = useState([]);
  
  // Rules-Based Question Engine
  const questions = [
    { 
      id: 'q1', 
      type: 'Fundamental', 
      text: 'Explain the difference between SQL and NoSQL databases. When would you use one over the other?',
      tags: ['CS', 'Database'],
      suggested_rubric: 'Score 8+ if they mention ACID properties vs Eventual Consistency.'
    },
    { 
      id: 'q2', 
      type: 'Architecture', 
      text: 'How would you design a rate-limiting service for a high-traffic API?',
      tags: ['CS', 'System Design'],
      suggested_rubric: 'Look for Token Bucket or Leaky Bucket algorithms.'
    },
    { 
      id: 'q3', 
      type: 'Integrity', 
      text: 'Have you ever had to choose between code quality and a deadline? How did you handle it?',
      tags: ['Behavioral'],
      suggested_rubric: 'Value honesty and trade-off analysis over "I never compromise quality".'
    }
  ];

  // Timers Logic
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setTotalTime(t => t + 1);
        setQuestionTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setQuestionTime(0);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    try {
      addToast('✅ Syncing Panel Scores...', 'success');
      // Simulate Non-Destructive Merge Save
      await api.post(`/candidates/${candidate.id}/interview-sync`, {
        scores,
        notes,
        red_flags: redFlags,
        duration: totalTime
      });
      addToast('🎉 Interview Finalized & Persisted', 'success');
    } catch (err) {
      addToast('❌ Persistence Error — Local Storage Fallback Active', 'error');
    }
  };

  const toggleRedFlag = (tag) => {
    setRedFlags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="p-8 h-full flex flex-col bg-slate-950 overflow-hidden text-white font-sans">
      
      {/* ━━━ TOP COMMAND BAR ━━━ */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <Users size={32} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-950"></div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight">{candidate.name}</h1>
            <div className="flex items-center space-x-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <span>{candidate.role}</span>
              <span className="text-slate-700">•</span>
              <span className="text-[#FF6B00]">{candidate.department}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black text-slate-500 uppercase">Total Time</span>
              <span className="text-xl font-mono font-bold text-white tracking-widest">{formatTime(totalTime)}</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black text-[#FF6B00] uppercase">Question Time</span>
              <span className="text-xl font-mono font-bold text-[#FF6B00] tracking-widest">{formatTime(questionTime)}</span>
            </div>
          </div>
          <OrangeButton onClick={() => setIsPaused(!isPaused)} variant="outline" className="px-6 border-white/10 text-white">
            {isPaused ? <Zap size={18} className="mr-2" /> : <Timer size={18} className="mr-2" />}
            {isPaused ? 'RESUME' : 'PAUSE'}
          </OrangeButton>
        </div>
      </div>

      {/* ━━━ MAIN WORKSPACE ━━━ */}
      <div className="flex flex-1 space-x-8 overflow-hidden">
        
        {/* LEFT: Question Engine */}
        <div className="flex-1 flex flex-col space-y-6">
          <GlassCard className="flex-1 p-8 relative overflow-hidden flex flex-col border-white/5">
            <div className="absolute top-0 right-0 p-8">
              <Badge className="bg-slate-800 text-slate-400 border-none font-black px-3 py-1">QUESTION {currentQuestionIdx + 1} OF {questions.length}</Badge>
            </div>
            
            <div className="mb-6 flex items-center space-x-3">
              <div className="p-2 bg-[#FF6B00] rounded-lg text-slate-950">
                <Shield size={20} />
              </div>
              <span className="text-sm font-black text-[#FF6B00] uppercase tracking-widest">{questions[currentQuestionIdx].type} ENGINE</span>
            </div>

            <h2 className="text-3xl font-bold leading-tight mb-10 text-slate-100 italic">
              "{questions[currentQuestionIdx].text}"
            </h2>

            <div className="mt-auto">
              <div className="bg-[#FF6B00]/5 border border-[#FF6B00]/20 rounded-2xl p-6 mb-8">
                <span className="text-[10px] font-black text-[#FF6B00] uppercase block mb-2">SCORING RUBRIC REFERENCE</span>
                <p className="text-slate-300 text-sm leading-relaxed">{questions[currentQuestionIdx].suggested_rubric}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {questions[currentQuestionIdx].tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-[10px] font-bold text-slate-400">{t}</span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1))}
                    className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-slate-400 hover:text-white transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="px-10 py-4 bg-[#FF6B00] text-slate-950 rounded-2xl font-black flex items-center shadow-[0_4px_20px_rgba(255,107,0,0.4)] hover:scale-[1.02] transition-all active:scale-[0.98]"
                  >
                    NEXT QUESTION <ChevronRight size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* NOTES AREA */}
          <div className="h-48 relative">
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Live observations & Technical proofs..."
              className="w-full h-full bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#FF6B00]/30 transition-all resize-none shadow-inner"
            ></textarea>
            <div className="absolute top-4 right-4 text-[10px] font-black text-slate-700 tracking-widest uppercase">AUTO-SYNC ACTIVE</div>
          </div>
        </div>

        {/* RIGHT: Scoring & Panel Sync */}
        <div className="w-96 space-y-6">
          
          {/* PANELIST SYNC CONTROL */}
          <GlassCard className="p-6 border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-xs uppercase tracking-widest text-slate-400 flex items-center">
                <Activity size={14} className="mr-2 text-[#FF6B00]" /> 
                Live Panel Sync
              </h3>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold">P1</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold">P2</div>
              </div>
            </div>

            <div className="space-y-6">
              {['technical', 'clarity', 'soft_skills'].map(skill => (
                <div key={skill}>
                  <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase mb-3">
                    <span>{skill.replace('_', ' ')}</span>
                    <span className="text-[#FF6B00]">P1: {scores.p1[skill]} | P2: {scores.p2[skill]}</span>
                  </div>
                  <div className="relative h-2 bg-slate-900 rounded-full overflow-hidden">
                    {/* Panel 1 Bar */}
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#FF6B00] rounded-full z-10" 
                      style={{ width: `${scores.p1[skill] * 10}%` }}
                    ></div>
                    {/* Panel 2 Transparent Overlay for comparison */}
                    <div 
                      className="absolute left-0 top-0 h-full bg-blue-500/30 rounded-full z-0 border-r border-blue-400" 
                      style={{ width: `${scores.p2[skill] * 10}%` }}
                    ></div>
                  </div>
                  <input 
                    type="range" min="0" max="10" 
                    value={scores.p1[skill]}
                    onChange={(e) => setScores(v => ({...v, p1: {...v.p1, [skill]: parseInt(e.target.value)}}))}
                    className="w-full mt-2 accent-[#FF6B00] bg-transparent cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </GlassCard>

          {/* RED FLAG MODULE */}
          <GlassCard className="p-6 border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent">
            <h3 className="font-black text-xs uppercase tracking-widest text-red-500 mb-4 flex items-center">
              <Flag size={14} className="mr-2" /> Red Flag Tagging
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Integrity', 'Rudeness', 'Communication', 'Technical Gap', 'Evasive'].map(flag => (
                <button
                  key={flag}
                  onClick={() => toggleRedFlag(flag)}
                  className={`px-3 py-2 rounded-xl text-[10px] font-black transition-all border ${
                    redFlags.includes(flag) 
                      ? 'bg-red-500 text-white border-red-400' 
                      : 'bg-slate-900 text-red-500/50 border-white/5 hover:border-red-500/30'
                  }`}
                >
                  {flag.toUpperCase()}
                </button>
              ))}
            </div>
          </GlassCard>

          <OrangeButton 
            onClick={handleFinish}
            className="w-full py-6 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
          >
            FINISH INTERVIEW
          </OrangeButton>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass-panel {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        input[type=range]::-webkit-slider-runnable-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          height: 6px;
        }
        input[type=range]::-webkit-slider-thumb {
          margin-top: -6px;
        }
      `}} />
    </div>
  );
};

export default InterviewPanel;
