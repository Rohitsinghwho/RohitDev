import React from 'react';
import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';
import { Workflow } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
            <Workflow  color='#48ea69' size={40}/>
              <div>
                <h2 className="text-2xl font-bold  bg-clip-text">
                  Rohit.dev
                </h2>
                <p className="text-slate-600 font-medium">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Building modern web apps with React, Node.js, and Tailwind CSS.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-md">Navigation</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a href="#home" className="block text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 font-medium">
                  Home
                </a>
                <a href="#about" className="block text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 font-medium">
                  About
                </a>
              </div>
              <div className="space-y-2">
                <a href="#projects" className="block text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 font-medium">
                  Projects
                </a>
                <a href="#contact" className="block text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6 lg:text-right">
            <div>
              <h3 className="font-bold text-md mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/rohitsinghwho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 rounded-xl flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-emerald-200"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/rohitsinghwho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 hover:bg-blue-50 border-2 border-slate-200 hover:border-blue-300 rounded-xl flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-blue-200"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:devlopmentbyrohit@gmail.com"
                  className="w-12 h-12 bg-slate-100 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 rounded-xl flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-emerald-200"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="text-sm text-slate-600 space-y-1">
              <p>developmentbyrohit@gmail.com</p>
              <p>+91 7668266134</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center md:text-left font-medium">
            © {new Date().getFullYear()} Rohit Singh Negi. Made with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
