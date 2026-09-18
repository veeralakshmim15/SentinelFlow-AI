import React from 'react';

export default function AIReasoning({ incident }) {
  if (!incident) return null;

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>AI Incident Reasoning & Evidence Trace</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="code-box">
          <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '6px' }}>
            🧠 SentinelFlow Hypothesis Testing
          </div>
          <div>Root Cause: <strong style={{ color: '#ef4444' }}>{incident.root_cause}</strong></div>
          <div>Confidence Score: <strong style={{ color: '#10b981' }}>{incident.confidence}%</strong></div>
          <div>Business Impact: <strong style={{ color: '#f97316' }}>{incident.business_impact}</strong></div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '10px', border: 'var(--glass-border)' }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-main)' }}>Diagnostic Evidence Chain:</h4>
          <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <li>Database CPU reached 95% threshold</li>
            <li>Database connection pool maxed out at 490/500 slots</li>
            <li>Log Trace: FATAL remaining connection slots reserved</li>
            <li>Payment API latency spiked to 5.2s following DB connection exhaustion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
