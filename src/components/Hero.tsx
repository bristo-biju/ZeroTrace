"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl mx-auto"
      >
        <div className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full glass text-primary">
          Introducing ZeroTrace Certification
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Prove your <span className="gradient-text">Cybersecurity Readiness</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Affordable, continuous cyber trust certification built specifically for growing tech SMEs. 
          Turn compliance from a headache into a competitive advantage.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/80 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all">
            Book a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
