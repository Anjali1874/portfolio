import footerBg from "../assets/footerBg.png";
import Contact from "./contact";

function FAQs() {
  const faqs = [
    {
      question: "What technologies do you use?",
      answer:
        "I primarily work with React, JavaScript, Tailwind CSS, and modern web technologies. I focus on creating responsive and interactive user experiences.",
    },
    {
      question: "How can I contact you for projects?",
      answer:
        "You can reach out through the contact section or via email. I'm always interested in discussing new projects and collaborations.",
    },
    {
      question: "Do you offer freelance services?",
      answer:
        "Yes, I offer freelance services for web development, UI/UX design, and interactive portfolio projects. Feel free to reach out with your requirements.",
    },
    {
      question: "What's your design philosophy?",
      answer:
        "I believe in creating engaging, user-centric designs that are both beautiful and functional. Every project should feel like an interactive experience.",
    },
    {
      question: "How long have you been developing?",
      answer:
        "I have several years of experience in software development and web design, with a passion for creating innovative digital experiences.",
    },
    {
      question: "Can you work on custom projects?",
      answer:
        "Absolutely! I love taking on custom projects that challenge me to create something unique and innovative.",
    },
  ];

  return (
    <div
      id="faqs"
      className="w-full min-h-screen relative bg-fixed"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient + dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/90"></div>

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 pt-[120px]">
        <div className="max-w-3xl w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1
              className="text-6xl font-black text-white mb-6 font-fredoka"
              style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-pink-400 font-fredoka">
              Find answers to common questions
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-pink-400/50 transition-all duration-300 group cursor-pointer"
              >
                <summary className="p-6 font-bold text-white text-lg font-fredoka flex justify-between items-center group-open:text-pink-400 transition-colors">
                  {faq.question}
                  <span className="text-2xl group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10 mt-4 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
          <h2 className="text-4xl font-extrabold text-white mt-20 tracking-wide">Still Have questions??</h2>
        <Contact />
      </section>
    </div>
  );
}

export default FAQs;
