import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import ServiceHealth from '../components/ServiceHealth';
import IncidentCard from '../components/IncidentCard';
import AlertTable from '../components/AlertTable';
import { fetchDashboardStats, fetchAlerts, fetchIncidents, triggerEcommerceIncident, resetSimulation } from '../services/api';

export default function Dashboard({ onViewIncidentDetails }) {
  const [stats, setStats] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [activeIncident, setActiveIncident] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const s = await fetchDashboardStats();
      setStats(s);

      const a = await fetchAlerts();
      setAlerts(a);

      const incs = await fetchIncidents();
      const active = incs.find((i) => i.status !== 'RESOLVED');
      setActiveIncident(active || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, []);

  async function handleTriggerSimulation() {
    setLoading(true);
    await triggerEcommerceIncident();
    await loadData();
  }

  async function handleResetSimulation() {
    setLoading(true);
    await resetSimulation();
    await loadData();
  }

  if (loading && !stats) return <div style={{ color: 'var(--text-muted)' }}>Loading SentinelFlow Telemetry...</div>;

  return (
    <div>
      {/* Top Header Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Enterprise Operations Console</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Real-time Autonomous Alert Correlation & Incident Resolution Engine
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-danger" onClick={handleTriggerSimulation}>
            ⚡ Trigger E-Commerce Incident
          </button>
          <button className="btn btn-secondary" onClick={handleResetSimulation}>
            🔄 Reset Telemetry
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-grid">
        <StatCard title="System Health" value={stats?.system_status} status={stats?.system_status} color={stats?.system_status === 'HEALTHY' ? 'green' : 'red'} />
        <StatCard title="Active Services" value={`${stats?.healthy_services} / ${stats?.total_services}`} color="blue" />
        <StatCard title="Ingested Alerts" value={stats?.total_alerts} color="orange" />
        <StatCard title="Active Incidents" value={stats?.active_incidents} color={stats?.active_incidents > 0 ? 'red' : 'green'} />
      </div>

      {/* Active Incident Warning Card */}
      {activeIncident && (
        <div style={{ marginBottom: '24px' }}>
          <IncidentCard incident={activeIncident} onViewDetails={onViewIncidentDetails} />
        </div>
      )}

      {/* Main Grid: Left Services, Right Alerts */}
      <div className="dashboard-layout-grid">
        <ServiceHealth services={stats?.services || []} />
        <AlertTable alerts={alerts} />
      </div>
    </div>
  );
}
