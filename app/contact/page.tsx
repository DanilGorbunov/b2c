"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Linkedin
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone (WhatsApp)",
    value: "+1 (415) 317-2089",
    href: "https://wa.me/14153172089"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "11527 Gallatin Trl, Parrish, FL 34219",
    href: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Anastasiya Dmytryk",
    href: "https://www.linkedin.com/in/anastasiya-dmytryk-009a29204/"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E5E5] mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#A3A3A3] max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to start your next project? Let's discuss how we can bring your ideas to life 
            with exceptional design and user experience.
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#171717] border border-[#262626] rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#E5E5E5] mb-8 text-center tracking-tight">Contact Information</h2>
            
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-[#262626] border border-[#262626] p-3 rounded-lg">
                  <contact.icon className="h-5 w-5 text-[#E5E5E5]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#737373] font-light uppercase tracking-wider mb-1">
                    {contact.label}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E5E5E5] hover:text-[#F5F5F5] transition-colors duration-200 font-light"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div className="text-[#E5E5E5] font-light">{contact.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
