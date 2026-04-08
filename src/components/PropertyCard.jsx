"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Square } from "lucide-react";

export default function PropertyCard({ property, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Price Badge */}
        {property.price && (
          <div className="absolute top-4 left-4 bg-accent-red text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {property.price}
          </div>
        )}

        {/* Tag Badge */}
        {property.tag && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold">
            {property.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        
        {/* Location */}
        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {property.location}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <Bed className="w-4 h-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <Bath className="w-4 h-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <Square className="w-4 h-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
