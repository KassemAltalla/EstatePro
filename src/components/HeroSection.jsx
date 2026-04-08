"use client";

import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop)",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

          {/* Content */}
          <div className="relative z-10 px-6 py-24 sm:px-12 sm:py-32 lg:py-40 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Find Your{" "}
                <span className="text-blue-400">Dream</span>
                <br />
                Properties
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
              >
                Discover luxury homes, premium apartments, and investment properties in the most
                desirable locations.
              </motion.p>

              {/* Glassmorphism Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass rounded-2xl p-4 max-w-2xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter location, city, or ZIP..."
                      className="bg-transparent w-full text-gray-800 placeholder-gray-500 outline-none text-sm"
                    />
                  </div>
                  <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
