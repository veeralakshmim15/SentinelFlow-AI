import React, { useState } from 'react';

export default function Presentation({ onTriggerIncident }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const slidesData = [
    {
      num: '01',
      title: 'Title',
      heading: 'SentinelFlow AI',
      subheading: 'Intelligent Enterprise Incident Resolution Agent',
      tagline: '“From Alert Noise to Actionable Resolution”',
      type: 'title',
      notes: 'Presenting SentinelFlow AI for Problem Statement AI-01. SentinelFlow AI continuously watches enterprise systems, correlates root causes, decides evidence-backed actions, and drives autonomous, safe remediation.'
    },
    {
      num: '02',
      title: 'Problem',
      heading: 'When Every Alert Looks Like a New Problem',
      subheading: 'Modern enterprises generate hundreds of disconnected operational signals every hour.',
      type: 'problem',
      notes: 'Traditional monitoring tools are reactive flag-raisers. When a backend database suffers heavy load, 5 separate alerts trigger from 3 teams. The operational gap isn\'t detecting failure — it\'s understanding correlation, root cause, impact, and taking the right resolution action without wasting hours.'
    },
    {
      num: '03',
      title: 'Real-World Scenario',
      heading: '5 Alerts. 1 Root Cause.',
      subheading: 'E-Commerce Payment Incident at 10:30 AM — Simulated Live Scenario',
      type: 'scenario',
      notes: 'At 10:30 AM, 5 alerts fire. The payment API shows a 35% error rate and 5.2s latency. But SentinelFlow AI instantly correlates these 5 alerts into a single root cause: Database Connection Pool Overload. One incident, clear cause.'
    },
    {
      num: '04',
      title: 'Proposed Solution',
      heading: 'Meet SentinelFlow AI',
      subheading: 'End-to-end AI incident resolution agent converting fragmented operational signals into evidence-backed decisions.',
      type: 'solution',
      notes: 'SentinelFlow AI follows the complete 8-stage operational life cycle required by AI-01: Detect, Correlate, Investigate, Assess, Decide, Remediate, Verify, and Audit.'
    },
    {
      num: '05',
      title: 'AI Workflow',
      heading: 'How SentinelFlow AI Reasons',
      subheading: 'Intelligence Loop: Observe → Reason → Decide → Act → Verify',
      type: 'workflow',
      notes: 'SentinelFlow AI pulls multi-modal evidence (logs + metrics + topology), formulates a root cause hypothesis, assesses impact, picks a policy-checked decision, executes, and verifies recovery.'
    },
    {
      num: '06',
      title: 'System Architecture',
      heading: 'End-to-End Technical Architecture',
      subheading: 'Production-Ready Modular Architecture with Human-in-the-Loop Safety',
      type: 'architecture',
      notes: 'Our technical architecture separates concerns neatly: Enterprise Ingestion → Graph Correlation → Multi-Agent AI Core → Safety Orchestrator.'
    },
    {
      num: '07',
      title: 'Root Cause & Impact',
      heading: 'From Symptoms to Evidence-Based Diagnosis',
      subheading: 'Connecting Telemetry Dots Across Stack Layers for Proven Root Cause Identification',
      type: 'diagnostics',
      notes: 'SentinelFlow AI synthesizes alerts, exact log error traces, metric slopes, and dependency topology to generate an evidence-backed incident report with a 96% confidence score.'
    },
    {
      num: '08',
      title: 'Decision & Remediation',
      heading: 'From Diagnosis to Controlled Remediation',
      subheading: 'Safety Principle: Automate what is safe. Escalate what requires human control.',
      type: 'decision',
      notes: 'For high-risk actions like DB pool scaling or production restarts, SentinelFlow AI presents an instant 1-click approval request to the on-call engineer with complete context.'
    },
    {
      num: '09',
      title: 'Live Demo',
      heading: 'Watch an Incident Resolve Itself',
      subheading: 'Interactive SentinelFlow AI Resolution Simulator Engine',
      type: 'demo',
      notes: 'This is the highlight of our prototype. Watch what happens when an alert storm hits: 5 alerts fire, status goes degraded red, SentinelFlow AI correlates them, analyzes root cause, prompts for 1-click human approval, executes pool scaling, and verifies metrics back to healthy green.'
    },
    {
      num: '10',
      title: 'Explainability & Audit',
      heading: 'Every AI Decision Leaves a Trail',
      subheading: 'Complete Incident Resolution Audit Trail & Comparative Advantage',
      type: 'audit',
      notes: 'Enterprise ops teams require 100% transparency. SentinelFlow AI logs every timestamped decision step from detection to verification.'
    },
    {
      num: '11',
      title: 'Impact & Future',
      heading: 'Building Next-Gen Enterprise Operations',
      subheading: 'Transforming Enterprise IT from Reactive Fighting to Autonomous Resilience',
      type: 'impact',
      notes: 'In summary, SentinelFlow AI solves problem statement AI-01 by taking enterprise operations from noisy, reactive alert fatigue to autonomous, verifiable resilience. Thank you judges!'
    }
  ];

  const totalSlides = slidesData.length;

  function nextSlide() {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  }

  function prevSlide() {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }

  const slide = slidesData[currentSlide];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      {/* Top Header Controls for Slide Presentation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
            SLIDE {slide.num} / {totalSlides} — {slide.title.toUpperCase()}
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{slide.heading}</h2>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className={`btn ${showNotes ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowNotes(!showNotes)}>
            🗣️ Speaker Notes
          </button>
          <button className={`btn ${showGrid ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowGrid(!showGrid)}>
            ⣿ Slide Grid
          </button>
        </div>
      </div>

      {/* Main Slide Card Stage */}
      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px', position: 'relative' }}>
        
        {/* Slide Type 1: Title */}
        {slide.type === 'title' && (
          <div style={{ textAlign: 'center', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="badge badge-blue">Problem Statement: AI-01</span>
              <span className="badge badge-orange">Domain: AI & Agents</span>
            </div>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '12px' }}>
              SentinelFlow <span style={{ color: 'var(--accent-cyan)' }}>AI</span>
            </h1>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '20px' }}>
              Intelligent Enterprise Incident Resolution Agent
            </h3>
            <blockquote style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--accent-cyan)', marginBottom: '32px' }}>
              {slide.tagline}
            </blockquote>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontWeight: 700 }}>
              <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>Detect</span>➔
              <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>Correlate</span>➔
              <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>Investigate</span>➔
              <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>Decide</span>➔
              <span style={{ padding: '8px 16px', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderRadius: '20px' }}>Resolve</span>
            </div>
          </div>
        )}

        {/* Slide Type 2: Problem */}
        {slide.type === 'problem' && (
          <div className="two-col-grid" style={{ height: '100%' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--status-red)', marginBottom: '12px' }}>Operational Challenge Flow:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '10px', background: 'rgba(239,68,68,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--status-red)' }}>⚡ <strong>Multiple Disconnected Alerts</strong></div>
                <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>↓</div>
                <div style={{ padding: '10px', background: 'rgba(249,115,22,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--status-orange)' }}>🧩 <strong>Related Symptoms Drowned in Noise</strong></div>
                <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>↓</div>
                <div style={{ padding: '10px', background: 'rgba(234,179,8,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--status-yellow)' }}>🚨 <strong>Alert Fatigue & Overload</strong></div>
                <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>↓</div>
                <div style={{ padding: '10px', background: 'rgba(153,27,27,0.2)', borderRadius: '8px', borderLeft: '4px solid #991b1b' }}>💥 <strong>Delayed Root Cause & Downtime</strong></div>
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>The SentinelFlow AI Gap:</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                <li style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '8px' }}>1️⃣ <strong>What is related?</strong> — Group alert storms into 1 root incident</li>
                <li style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '8px' }}>2️⃣ <strong>What is the root cause?</strong> — Pinpoint failing layer with log evidence</li>
                <li style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '8px' }}>3️⃣ <strong>What is affected?</strong> — Assess blast radius & business impact</li>
                <li style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '8px' }}>4️⃣ <strong>What action to take?</strong> — Execute safe, audited remediation</li>
              </ul>
            </div>
          </div>
        )}

        {/* Slide Type 3: Scenario */}
        {slide.type === 'scenario' && (
          <div className="two-col-grid">
            <div>
              <h4 style={{ marginBottom: '12px' }}>E-Commerce Incident Telemetry (10:30 AM):</h4>
              <table className="data-table">
                <thead>
                  <tr><th>System</th><th>Alert</th><th>Metric</th></tr>
                </thead>
                <tbody>
                  <tr><td>Database</td><td>CPU Threshold Exceeded</td><td style={{ color: '#ef4444', fontWeight: 700 }}>95%</td></tr>
                  <tr><td>Database</td><td>Connections Maxed</td><td style={{ color: '#f97316', fontWeight: 700 }}>490 conn</td></tr>
                  <tr><td>Payment API</td><td>Latency P99 Spike</td><td style={{ color: '#ef4444', fontWeight: 700 }}>5.2 sec</td></tr>
                  <tr><td>Payment API</td><td>Gateway Timeouts</td><td style={{ color: '#f97316', fontWeight: 700 }}>120 reqs</td></tr>
                  <tr><td>Payment API</td><td>HTTP 500 Error Rate</td><td style={{ color: '#ef4444', fontWeight: 700 }}>35%</td></tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.08)', padding: '24px', borderRadius: '12px', border: '1px solid var(--accent-cyan)' }}>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>🎯 SentinelFlow Resolution:</h4>
              <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>5 Alerts ➔ Correlated into <strong>1 Root Incident</strong> (Database Connection Exhaustion)</p>
              <blockquote style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                “The loudest alert is not necessarily the root cause.”
              </blockquote>
            </div>
          </div>
        )}

        {/* Slide Type 4: Solution */}
        {slide.type === 'solution' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', margin: 'auto 0' }}>
            {['01 DETECT', '02 CORRELATE', '03 INVESTIGATE', '04 ASSESS', '05 DECIDE', '06 REMEDIATE', '07 VERIFY', '08 AUDIT'].map((step, idx) => (
              <div key={idx} style={{ background: 'rgba(15,23,42,0.8)', padding: '16px', borderRadius: '12px', border: 'var(--glass-border)' }}>
                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>{step}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>Automated operational step #{idx + 1}</p>
              </div>
            ))}
          </div>
        )}

        {/* Slide Type 9: Live Demo */}
        {slide.type === 'demo' && (
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Run Live Prototype Incident Simulation</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              Simulate 5 telemetry alerts, AI root cause analysis, 1-click human approval gateway, and metric recovery.
            </p>
            <button className="btn btn-danger" style={{ padding: '14px 28px', fontSize: '1.1rem' }} onClick={onTriggerIncident}>
              ⚡ Run Live E-Commerce Resolution Simulation
            </button>
          </div>
        )}

        {/* Slide Fallback Generic */}
        {!['title', 'problem', 'scenario', 'solution', 'demo'].includes(slide.type) && (
          <div style={{ margin: 'auto 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '24px' }}>{slide.subheading}</p>
            <div className="code-box">
              {slide.notes}
            </div>
          </div>
        )}

        {/* Bottom Speaker Notes Drawer if toggled */}
        {showNotes && (
          <div style={{ marginTop: '20px', background: '#0f172a', borderTop: '2px solid var(--accent-cyan)', padding: '16px', borderRadius: '10px' }}>
            <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>🗣️ Speaker Notes:</strong>
            <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{slide.notes}</p>
          </div>
        )}

        {/* Slide Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: 'var(--glass-border)' }}>
          <button className="btn btn-secondary" onClick={prevSlide} disabled={currentSlide === 0}>
            ← Previous Slide
          </button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {slidesData.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: idx === currentSlide ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.2)',
                  cursor: 'pointer', transform: idx === currentSlide ? 'scale(1.3)' : 'scale(1)'
                }}
              />
            ))}
          </div>

          <button className="btn btn-primary" onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
            Next Slide →
          </button>
        </div>

      </div>

      {/* Grid Modal Overlay if toggled */}
      {showGrid && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(7,9,14,0.92)', backdropFilter: 'blur(16px)', zIndex: 300, padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3>Slide Deck Overview</h3>
            <button className="btn btn-secondary" onClick={() => setShowGrid(false)}>✕ Close</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxHeight: '70vh', overflowY: 'auto' }}>
            {slidesData.map((s, idx) => (
              <div
                key={idx}
                className="card"
                onClick={() => { setCurrentSlide(idx); setShowGrid(false); }}
                style={{ cursor: 'pointer', border: idx === currentSlide ? '2px solid var(--accent-cyan)' : 'var(--glass-border)' }}
              >
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>SLIDE {s.num}</span>
                <h4 style={{ marginTop: '4px', fontSize: '0.9rem' }}>{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
