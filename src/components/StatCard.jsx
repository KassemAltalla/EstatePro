"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
      <div className="text-gray-600 text-sm">{stat.label}</div>
    </motion.div>
  );
}
