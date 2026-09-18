import React from 'react';

export default function AuditTimeline({ auditLogs = [] }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Incident Audit Timeline</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {auditLogs.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No audit history available.</p>
        ) : (
          auditLogs.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '10px 14px',
                background: 'rgba(15, 23, 42, 0.8)',
                borderRadius: '8px',
                border: 'var(--glass-border)',
                fontSize: '0.85rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-code)', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
                {new Date(item.timestamp).toLocaleTimeString()}
              </span>
              <span className="badge badge-blue">{item.event_type}</span>
              <div style={{ flex: 1 }}>
                <strong>{item.actor}:</strong> {item.action} — <span style={{ color: 'var(--text-muted)' }}>{item.details}</span>
              </div>
              <span className={`badge ${item.result === 'SUCCESS' || item.result === 'RESOLVED' ? 'badge-green' : 'badge-orange'}`}>
                {item.result}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
