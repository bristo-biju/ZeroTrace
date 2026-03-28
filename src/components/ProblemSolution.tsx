"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl relative overflow-hidden border-rose-500/20"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <ShieldAlert size={120} className="text-rose-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-rose-400">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            Many organizations do not clearly know their cybersecurity readiness and cannot easily prove they are secure. 
            This creates <strong>cyber risk</strong> and reduces trust from customers, partners, and regulators.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-3xl relative overflow-hidden border-primary/20"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <ShieldCheck size={120} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-primary">The Solution</h2>
          <p className="text-lg text-muted-foreground">
            ZeroTrace gives a <strong>cybersecurity trust certification</strong> that helps companies assess, prove, and improve security. 
            We make enterprise-grade compliance simple and affordable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
