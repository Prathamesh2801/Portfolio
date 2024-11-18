import {
 
  Linkedin,
  Mail,
  Phone,
  DribbbleIcon as BehanceLogo,
  Github,
} from "lucide-react";
import Typewriter from "./Typewriter";

export default function Contact() {
  const msg = [
    "I'm here to help! Whether you have a question, feedback, or just want to say hello, feel free to drop me a message. I look forward to hearing from you!",
    "Your thoughts and inquiries are important to me. Please don't hesitate to reach out with any questions or comments you may have. I'm eager to assist you!",
    "Let's connect! I'm always open to discussing new ideas, collaborations, or any questions you might have. Drop me a message, and I'll get back to you as soon as possible!",
    "I love hearing from you! Whether it's a quick question or a detailed inquiry, I'm here to listen and help. Don't hesitate to reach out!",
  ];
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f1630] via-[#1a2744] to-[#3d5180]">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center text-white mb-16">
          CONTACT
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto relative">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 text-white">
            <h2
              className="text-3xl font-bold mb-4"
             
              
            >
              Drop Me a Message
            </h2>
            <p className="text-gray-200 mb-8 text-lg"  style={{ "--cursor-height": "1.2rem" }}>
              <Typewriter
                words={msg}
                typingSpeed={50}
                backspaceSpeed={20}
                delay={10000}
              />
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+91 9867104527</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span>truepratham2801@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 relative">
            {/* Half circles */}
            <div className="absolute left-0 top-1/2 w-8 h-16 bg-[#3d5180] -translate-x-1/2 -translate-y-1/2 rounded-r-full"></div>
            <div className="absolute right-0 top-1/2 w-8 h-16 bg-[#3d5180] translate-x-1/2 -translate-y-1/2 rounded-l-full"></div>

            <div className="bg-[#1a2744]/80 backdrop-blur-sm rounded-3xl p-8 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-[#3d5180] to-transparent opacity-20 rounded-3xl"></div>
              <form className="space-y-6 relative z-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#0f1630] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#0f1630] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0f1630] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-32 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-around items-center text-white">
          <p>2024 - Prathamesh Kamble , All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/prathamesh-kamble-51b8502a5/"
              target="_blank"
              className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Prathamesh2801"
              target="_blank"
              className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
