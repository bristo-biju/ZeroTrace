"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Clear visibility into security readiness",
  "Reduced breach risk through continuous monitoring",
  "Easy proof of compliance for audits",
  "Faster trust-building with clients and partners",
];

export default function Benefits() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12">The ZeroTrace Advantage</h2>
        <div className="space-y-6 w-full max-w-2xl">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 p-4 rounded-xl glass border-primary/20"
            >
              <CheckCircle2 className="text-primary flex-shrink-0" size={28} />
              <p className="text-xl font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
