"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stats } from "@/data/realEstateData";
import StatCard from "@/components/StatCard";

export default function StatsSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Happy Clients
            </h2>
            <p className="text-gray-600 mb-8">
              With over 15 years of experience, we've helped thousands find their perfect home. 
              Our commitment to excellence and client satisfaction sets us apart.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.id} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"
                    alt="Luxury property"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop"
                    alt="Modern interior"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop"
                    alt="Beautiful garden"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=500&fit=crop"
                    alt="Premium home"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
