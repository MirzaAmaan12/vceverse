import React from 'react';
import { aiverse2Data } from '../data/content';

const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Story & Context */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-widest">
            Event Retrospective
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            Empowering the next generation of <span className="text-orange-500">AI Architects.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {aiverse2Data.about}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {aiverse2Data.overviewPoints.map((point, i) => (
              <div key={i} className="border-l-2 border-orange-500/50 pl-4">
                <h4 className="font-bold text-white">{point.title}</h4>
                <p className="text-sm text-gray-500">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Event Meta-Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/20 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 text-orange-500">Workshop Overview</h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-400">Duration</span>
              <span className="font-mono text-white">3 Days Intensive</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-400">Level</span>
              <span className="font-mono text-white">Beginner to Intermediate</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-400">Department</span>
              <span className="font-mono text-white">CSE (AI & ML)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Focus Areas</span>
              <span className="font-mono text-white text-right">GenAI, LLMs, Prompting</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
             <p className="text-xs text-orange-300 uppercase font-bold mb-1">Lead Coordinator</p>
             <p className="text-white font-bold">{aiverse2Data.speaker.name}</p>
             <p className="text-xs text-gray-400">{aiverse2Data.speaker.role}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;