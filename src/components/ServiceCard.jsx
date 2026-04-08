"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, index }) {
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        {IconComponent && (
          <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}
