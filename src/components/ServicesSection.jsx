"use client";

import { motion } from "framer-motion";
import { services } from "@/data/realEstateData";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 bg-section-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
