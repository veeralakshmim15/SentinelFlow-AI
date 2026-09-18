import React, { useEffect, useState } from 'react';
import AIReasoning from '../components/AIReasoning';
import DependencyGraph from '../components/DependencyGraph';
import AuditTimeline from '../components/AuditTimeline';
import AlertTable from '../components/AlertTable';
import { fetchIncidentDetails, approveRemediation } from '../services/api';

export default function IncidentDetails({ incidentId, onBack }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState(false);

  async function loadDetails() {
    try {
      const res = await fetchIncidentDetails(incidentId);
      setData(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDetails();
  }, [incidentId]);

  async function handleApprove() {
    setApproving(true);
    try {
      await approveRemediation(incidentId, 'Hackathon Operator');
      await loadDetails();
    } catch (err) {
      console.error(err);
    } finally {
      setApproving(false);
    }
  }

  if (loading || !data) return <div style={{ color: 'var(--text-muted)' }}>Loading Incident Diagnostic Evidence...</div>;

  const { incident, alerts, remediations, audit_logs } = data;
  const pendingRemediation = remediations.find((r) => r.status === 'PENDING');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: '8px' }}>
            ← Back to Dashboard
          </button>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>
            Incident {incident.incident_number}: {incident.title}
          </h1>
        </div>

        <span className={`badge ${incident.status === 'RESOLVED' ? 'badge-green' : 'badge-red'}`} style={{ fontSize: '1rem', padding: '8px 16px' }}>
          Status: {incident.status}
        </span>
      </div>

      {/* Pending Approval Hero Banner */}
      {pendingRemediation && (
        <div className="card" style={{ border: '2px solid var(--status-orange)', background: 'rgba(249, 115, 22, 0.1)', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="badge badge-orange" style={{ marginBottom: '6px' }}>
                HUMAN APPROVAL REQUIRED (High-Risk Action)
              </span>
              <h3 style={{ fontSize: '1.2rem', margin: '4px 0' }}>{pendingRemediation.action_type}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{pendingRemediation.description}</p>
            </div>

            <button className="btn btn-success" onClick={handleApprove} disabled={approving} style={{ padding: '12px 24px', fontSize: '1rem' }}>
              {approving ? 'Executing Remediation...' : '✅ Approve & Execute Remediation'}
            </button>
          </div>
        </div>
      )}

      {/* 2-Column Section: AI Reasoning & Topology */}
      <div className="two-col-grid">
        <AIReasoning incident={incident} />
        <DependencyGraph />
      </div>

      {/* Alert Stream & Timeline */}
      <div style={{ marginBottom: '24px' }}>
        <AlertTable alerts={alerts} />
      </div>

      <div>
        <AuditTimeline auditLogs={audit_logs} />
      </div>
    </div>
  );
}
