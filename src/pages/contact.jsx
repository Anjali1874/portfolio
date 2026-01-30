
import { useState } from "react";
import resume from "../public/Anjali_Kumbhar_Resume.pdf";



function Contact() {
  const [rating, setRating] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const email = "kumbharanjali196@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-20"
      >
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-out">
            Email copied!
          </div>
        )}
        {/* Main Card */}
        <div className="relative z-10 w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_60px_rgba(217,70,239,0.25)] p-6 sm:p-10">
          
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide text-center sm:text-left">
            LET’S CONNECT
          </h2>
          <p className="text-white/70 mb-10 text-center sm:text-left">
            Ready to collaborate? Reach out and let’s create something amazing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Left Actions */}
            <div className="space-y-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anjali-kumbhar-9aa299252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-6 py-4 rounded-xl border border-pink-400/40 text-pink-300 hover:bg-pink-400/10 transition-all shadow-[0_0_20px_rgba(236,72,153,0.25)]"
              >
                <span className="text-xl">🔗</span>
                <span className="font-medium">LinkedIn</span>
                <span className="sr-only">(opens in new tab)</span>
              </a>

              {/* Email */}
              <div className="flex gap-2">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 flex items-center gap-3 px-6 py-4 rounded-xl border border-purple-400/40 text-purple-300 hover:bg-purple-400/10 transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] break-all"
                >
                  <span className="text-xl">✉️</span>
                  <span className="font-medium">{email}</span>
                </a>
              </div>

              {/* Resume Download */}
              <a
                href={resume}
                download
                className="w-full flex items-center gap-3 px-6 py-4 rounded-xl border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition-all shadow-[0_0_20px_rgba(52,211,153,0.25)]"
              >
                <span className="text-xl">📄</span>
                <span className="font-medium">Download Resume</span>
              </a>
            </div>

            {/* Rating Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-6">
                <p className="text-white/80 mb-3 text-center">
                  Rate My Portfolio
                </p>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`text-3xl transition-transform hover:scale-125 ${
                        rating >= star ? "text-yellow-400" : "text-white/30"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                {rating > 0 && (
                  <p className="text-sm text-white/60 mt-3">
                    You rated {rating} star{rating > 1 && "s"} ✨
                  </p>
                )}
              </div>
            </div>

            {/* Right Message */}
            <div className="text-white/70 text-center lg:text-left space-y-4">
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

      {/* Footer */}
      <h1 className="text-center text-white/40 text-sm py-6">
        # Developed by Anjali Kumbhar
      </h1>
    </>
  );
}

export default Contact;
