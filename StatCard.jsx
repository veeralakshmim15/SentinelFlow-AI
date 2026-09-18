import React from 'react';

export default function StatCard({ title, value, status, icon: Icon, color = 'blue' }) {
  const colorMap = {
    blue: 'border-blue-500 text-blue-400',
    green: 'border-emerald-500 text-emerald-400',
    red: 'border-rose-500 text-rose-400',
    orange: 'border-orange-500 text-orange-400',
  };

  return (
    <div className={`card stat-card ${colorMap[color] || ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{title}</span>
        {Icon && <Icon size={20} />}
      </div>
      <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-code)' }}>
        {value}
      </div>
      {status && (
        <span className={`badge ${status === 'HEALTHY' ? 'badge-green' : 'badge-red'}`}>
          {status}
        </span>
      )}
    </div>
  );
}
