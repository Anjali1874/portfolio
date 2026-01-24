import { useState } from "react";

function Contact() {
  const [rating, setRating] = useState(0);

  return (
    <>
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 " />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.25)] p-10">
        
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">
          LET’S CONNECT
        </h2>
        <p className="text-white/70 mb-10">
          Ready to collaborate? Reach out and let’s create something amazing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* Left Actions */}
          <div className="space-y-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anjali-kumbhar-9aa299252/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-6 py-3 rounded-xl border border-pink-400/40 text-pink-300 hover:bg-pink-400/10 transition-all shadow-[0_0_20px_rgba(236,72,153,0.25)]"
            >
              <span className="text-xl">🔗</span>
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href=""
              className="w-full flex items-center gap-3 px-6 py-3 rounded-xl border border-purple-400/40 text-purple-300 hover:bg-purple-400/10 transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)]"
            >
              <span className="text-xl">✉️</span>
              <span className="font-medium">Email Me : kumbharanjali196@gmail.com</span>
            </a>

            {/* Resume Download */}
            <a
              href="/Anjali_Kumbhar_Resume.pdf"
              download
              className="w-full flex items-center gap-3 px-6 py-3 rounded-xl border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition-all shadow-[0_0_20px_rgba(52,211,153,0.25)]"
            >
              <span className="text-xl">📄</span>
              <span className="font-medium">Download Resume</span>
            </a>
          </div>

          {/* Center Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-56 h-56 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center">
              <p className="text-white/80 mb-3">Rate My Portfolio</p>

              {/* Stars */}
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl transition-transform hover:scale-125 ${
                      rating >= star ? "text-yellow-400" : "text-white/30"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <p className="text-sm text-white/60 mt-2">
                  You rated {rating} star{rating > 1 && "s"} ✨
                </p>
              )}
            </div>
          </div>

          {/* Right Message */}
          <div className="text-white/70 text-center md:text-left space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Thanks for stopping by 🚀
            </h3>
            <p>
              If my work caught your interest, let’s connect on LinkedIn or drop
              me an email. I’m always excited to collaborate and learn.
            </p>
          </div>
        </div>
      </div>
    </section>
      <h1># Developed by Anjali kumbhar</h1>
    </>
  );
}

export default Contact;
