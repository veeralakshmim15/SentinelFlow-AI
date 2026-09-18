import React from 'react';

export default function IncidentCard({ incident, onViewDetails }) {
  if (!incident) return null;

  return (
    <div className="card" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', background: 'rgba(239, 68, 68, 0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div>
          <span className="badge badge-red" style={{ marginRight: '8px' }}>
            {incident.severity}
          </span>
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {incident.incident_number}
          </span>
          <h3 style={{ fontSize: '1.2rem', marginTop: '4px' }}>{incident.title}</h3>
        </div>

        <button className="btn btn-primary" onClick={() => onViewDetails(incident.id)}>
          Investigate & Approve →
        </button>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
        {incident.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', background: 'rgba(15, 23, 42, 0.8)', padding: '12px', borderRadius: '10px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Probable Root Cause</span>
          <div style={{ fontWeight: 700, color: 'var(--status-red)', fontSize: '0.9rem' }}>
            {incident.root_cause || 'Analyzing...'}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Confidence Score</span>
          <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
            {incident.confidence}%
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Business Impact</span>
          <div style={{ fontWeight: 700, color: 'var(--status-orange)', fontSize: '0.9rem' }}>
            {incident.business_impact}
          </div>
        </div>
      </div>
    </div>
  );
}
