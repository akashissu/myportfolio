"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { Stat } from "@/src/types";

const rotatingRoles = ["AI Systems", "Modern SaaS", "Agentic Automation", "Scalable UX"];

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
            <span>Premium full stack engineering with an AI-native edge</span>
          </div>

          <h1>Building Intelligent, Scalable &amp; Future-Ready Web Applications</h1>
          <p className="hero-subheadline">
            I’m a Full Stack AI Engineer specializing in AI-powered web apps, automation systems,
            scalable backend architecture, and modern user experiences.
          </p>

          <div className="typing-row">
            <span>Focused on</span>
            <strong key={rotatingRoles[roleIndex]} className="typing-text">
              {rotatingRoles[roleIndex]}
            </strong>
          </div>

          <div className="hero-actions">
            <a className="button" href="#projects">
              View My Work <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
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
          <div className="glass-card dashboard-card">
            <div className="dashboard-header">
              <div>
                <span className="eyebrow">AI Command Surface</span>
                <h2>Realtime product intelligence</h2>
              </div>
              <span className="status-badge">Live</span>
            </div>

            <div className="dashboard-panels">
              <div className="panel panel-code">
                <div className="panel-title">
                  <Bot size={18} />
                  <span>Agent workflow</span>
                </div>
                <code>
                  deploy(&quot;assistant-saas&quot;)
                  <br />
                  connect(&quot;vector-db&quot;)
                  <br />
                  monitor(&quot;events&quot;, true)
                  <br />
                  respond(&quot;&lt;180ms&quot;)
                </code>
              </div>

              <div className="panel-stack">
                <div className="panel panel-metrics">
                  <div className="metric-ring" />
                  <div>
                    <strong>97.4%</strong>
                    <span>automation success</span>
                  </div>
                </div>
                <div className="panel panel-insight">
                  <BrainCircuit size={18} />
                  <p>AI copilots, APIs, dashboards, and strong product UX working as one system.</p>
                </div>
              </div>
            </div>

            <div className="dashboard-footer">
              <span className="signal signal-blue" />
              <span className="signal signal-green" />
              <span className="signal signal-violet" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
