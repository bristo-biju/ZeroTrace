"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border-border">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Prove Your Trust?</h2>
          <p className="text-muted-foreground text-lg">Contact us or book a demo today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Mail /> <span>hello@zerotrace.com</span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Globe /> <span>zerotrace.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <form className="space-y-4 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input 
                id="name"
                name="name"
                autoComplete="name"
                type="text" 
                placeholder="Full Name" 
                aria-label="Full Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" 
              />
              <label htmlFor="email" className="sr-only">Work Email</label>
              <input 
                id="email"
                name="email"
                autoComplete="email"
                type="email" 
                placeholder="Work Email" 
                aria-label="Work Email"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" 
              />
              <label htmlFor="message" className="sr-only">How can we help?</label>
              <textarea 
                id="message"
                name="message"
                placeholder="How can we help?" 
                aria-label="How can we help?"
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <Button type="button" className="w-full h-12 text-md">
                Contact Us
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
