import React from 'react';

function Modal({ isOpen, onClose, destination }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      {/* Clickable backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* The Unfolding Scroll Container */}
      <div 
        className="relative max-w-2xl w-full shadow-2xl modal-unfold overflow-hidden" 
        style={{
          backgroundImage: 'url(/src/assets/aboutInfo.png)', 
          backgroundSize: '100% 100%', 
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        {/* Darker overlay to ensure text contrast against the parchment image */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Wrapper - Fades in after unfold completes */}
        <div className="relative p-10 md:p-14 z-10 modal-content-fade flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl font-black text-pink-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-fredoka">
                {destination?.number}
              </div>
              <h2 className="text-3xl font-bold text-white font-fredoka drop-shadow-lg leading-tight">
                {destination?.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 text-3xl font-bold hover:text-pink-400 transition-colors drop-shadow-lg -mt-4"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 text-white overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
            {destination?.content.map((paragraph, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-pink-500 mt-1">✦</span>
                <p className="text-lg leading-relaxed drop-shadow-md font-medium text-slate-100">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-8 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-pink-950/20 hover:shadow-pink-500/40 hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
          >
            Close Map Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;