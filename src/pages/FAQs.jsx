import React, { useState, useEffect } from 'react';
import footerBg from "../assets/footerBg.png";
import Contact from "./contact";

function FAQs() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute for the "Live Status" footer
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "I primarily work with React, JavaScript, Tailwind CSS, and modern web technologies. I focus on creating responsive and interactive user experiences.",
    },
    {
      question: "How can I contact you for projects?",
      answer: "You can reach out through the contact section or via email. I'm always interested in discussing new projects and collaborations.",
    },
    {
      question: "Do you offer freelance services?",
      answer: "Yes, I offer freelance services for web development, UI/UX design, and interactive portfolio projects.",
    },
    {
      question: "What's your design philosophy?",
      answer: "I believe in creating engaging, user-centric designs that are both beautiful and functional. Every project should feel like an interactive experience.",
    },
  ];

  return (
    <div
      id="faqs"
      className="w-full min-h-screen relative bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/90"></div>

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 md:py-20 px-4 md:px-6 pt-[100px] md:pt-[120px]">
        <div className="max-w-3xl w-full">
          {/* Responsive Title */}
          <div className="text-center mb-10 md:mb-12">
            <h1
              className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 font-fredoka leading-tight"
              style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-pink-400 font-fredoka">
              Find answers to common questions
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 group cursor-pointer"
              >
                <summary className="p-4 md:p-6 font-bold text-white text-base md:text-lg font-fredoka flex justify-between items-center group-open:text-pink-400 transition-colors list-none">
                  {faq.question}
                  <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform duration-300 text-pink-500">
                    ▾
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-6 text-sm md:text-base text-gray-300 border-t border-white/10 mt-2 md:mt-4 pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Responsive Contact Prompt */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-16 md:mt-20 tracking-wide text-center">
          Still Have questions??
        </h2>
        
        <Contact />

        {/* Live Status Footer - Personal Touch */}
        <div className="mt-20 w-full max-w-5xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs md:text-sm font-fredoka uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Located in Pune, MH, India
          </div>
          <div className="flex gap-6">
            <span>Local Time: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span>© 2026 Anjali Kumbhar</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQs;