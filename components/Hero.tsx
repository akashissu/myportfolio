"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroCommandPanel } from "@/components/HeroCommandPanel";
import type { Stat } from "@/src/types";

const rotatingRoles = ["AI copilots", "agentic automation", "AI SaaS systems", "high-trust product UX"];

type HeroProps = {
  stats: Stat[];
};

export function Hero({ stats }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-pill glass-card">
            <Sparkles size={16} />
            <span>AI-native engineering for serious products, not toy demos</span>
          </div>

          <h1>Designing AI products that feel sharp on the surface and solid underneath.</h1>
          <p className="hero-subheadline">
            I build premium AI experiences with strong frontend execution, dependable backend systems,
            and the product judgment to turn complex workflows into software people actually want to use.
          </p>

          <div className="typing-row">
            <span>Currently shaping</span>
            <strong key={rotatingRoles[roleIndex]} className="typing-text">
              {rotatingRoles[roleIndex]}
            </strong>
          </div>

          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Book a Project Call
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="glass-card stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <HeroCommandPanel />
        </motion.div>
      </div>
    </section>
  );
}
