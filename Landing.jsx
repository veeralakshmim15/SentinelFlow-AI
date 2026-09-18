import React from 'react';

export default function Landing({ onNavigateToDashboard }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <div className="badge badge-blue" style={{ marginBottom: '16px' }}>
        Problem Statement: AI-01 | Domain: AI & Agents
      </div>

      <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '16px' }}>
        SentinelFlow <span style={{ color: 'var(--accent-cyan)' }}>AI</span>
      </h1>

      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '24px' }}>
        Intelligent Enterprise Incident Resolution Agent
      </h2>

      <blockquote style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--accent-cyan)', marginBottom: '40px' }}>
        “From Alert Noise to Actionable Resolution”
      </blockquote>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1.05rem' }} onClick={onNavigateToDashboard}>
          Launch SentinelFlow Console →
        </button>
      </div>
    </div>
  );
}
