"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { categories } from "@/data/realEstateData";
import CategoryCard from "@/components/CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Explore Property Types
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our diverse portfolio of properties, from cozy studios to expansive villas
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
