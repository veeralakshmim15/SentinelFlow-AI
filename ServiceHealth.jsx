import React from 'react';

export default function ServiceHealth({ services = [] }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Enterprise Services Telemetry</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {services.map((svc) => (
          <div
            key={svc.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              background: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '10px',
              border: 'var(--glass-border)',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{svc.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{svc.type}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CPU</span>
                <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', fontWeight: 700 }}>
                  {svc.cpu}%
                </div>
              </div>
              <span className={`badge ${svc.status === 'HEALTHY' ? 'badge-green' : 'badge-red'}`}>
                {svc.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
