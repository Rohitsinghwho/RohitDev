import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    setTimeout(() => {
      setIsLoading(false);
      setStatus("Message sent successfully! 🚀");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Have a project in mind? Let's talk about it. I'm always open to
            exciting opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Contact Info - Mobile Stacked */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col items-center">
            <Card className="w-full bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 sm:pt-8 pb-6 px-4 sm:px-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center sm:text-left">
                  Contact Information
                </h2>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 hover:bg-slate-50 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:developmentbyrohit@gmail.com"
                      className="text-slate-700 font-medium hover:text-emerald-600 text-sm sm:text-base transition-colors block truncate"
                      title="developmentbyrohit@gmail.com" // Full email on hover
                    >
                      developmentbyrohit@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 hover:bg-slate-50 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                      Phone
                    </p>
                    <p className="text-slate-700 font-medium text-sm sm:text-base">
                      +91 7668266134
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-slate-50 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                      Location
                    </p>
                    <p className="text-slate-700 font-medium text-sm sm:text-base">
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 text-center sm:text-left">
                    Connect on Social
                  </h3>
                  <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                    <a
                      href="https://github.com/rohitsinghwho"
                      target="_blank"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 hover:bg-slate-200 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/rohitsinghwho"
                      target="_blank"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 hover:bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <Linkedin size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <Card className="w-full bg-white/80 backdrop-blur-sm border-slate-200 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="pt-6 sm:pt-8 pb-6 px-4 sm:px-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Send a Message
                </h2>

                {status && (
                  <div
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl mb-6 font-medium text-xs sm:text-sm ${
                      status.includes("successfully")
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800 border"
                        : "bg-red-50 border-red-200 text-red-800 border"
                    }`}
                  >
                    {status}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="h-12 sm:h-14 text-sm sm:text-base border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12 sm:h-14 text-sm sm:text-base border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="text-sm sm:text-base border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none py-3 px-4 min-h-[100px] sm:min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 sm:h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-emerald-300 transition-all duration-200 px-6"
                  >
                    {isLoading ? (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
