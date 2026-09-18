import React from 'react';

export default function AlertTable({ alerts = [] }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Correlated Alert Telemetry Stream</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Service</th>
            <th>Alert Type</th>
            <th>Metric Value</th>
            <th>Severity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {alerts.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                No active alerts in telemetry stream.
              </td>
            </tr>
          ) : (
            alerts.map((a) => (
              <tr key={a.id}>
                <td style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem' }}>
                  {new Date(a.timestamp).toLocaleTimeString()}
                </td>
                <td>
                  <strong>{a.service}</strong>
                </td>
                <td>{a.alert_type}</td>
                <td style={{ fontFamily: 'var(--font-code)', fontWeight: 700 }}>
                  {a.metric}: {a.value}
                </td>
                <td>
                  <span className={`badge ${a.severity === 'CRITICAL' ? 'badge-red' : 'badge-orange'}`}>
                    {a.severity}
                  </span>
                </td>
                <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{a.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
