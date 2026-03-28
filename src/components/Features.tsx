"use client";

import { motion } from "framer-motion";
import { Search, Activity, Award, FileText, Map, LayoutDashboard } from "lucide-react";

const features = [
  { icon: Search, title: "Security Readiness Assessment", desc: "Automated scans of your current posture." },
  { icon: Activity, title: "Risk Scoring", desc: "Real-time quantification of your cyber risk." },
  { icon: Award, title: "Trust Certification", desc: "Shareable badge to prove your compliance." },
  { icon: FileText, title: "Audit Reports", desc: "Comprehensive PDF exports for your clients." },
  { icon: Map, title: "Compliance Mapping", desc: "Align instantly with SOC2, ISO27001, and more." },
  { icon: LayoutDashboard, title: "Simple Dashboard", desc: "One unified view, no cyber-jargon included." },
];

export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground text-lg">Powerful features wrapped in a simple experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-muted-foreground">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
