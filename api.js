const API_BASE = '/api';

export async function fetchDashboardStats() {
  const res = await fetch(`${API_BASE}/dashboard/stats`);
  if (!res.ok) throw new Error('Failed to fetch dashboard stats');
  return res.json();
}

export async function fetchAlerts(incidentId = null) {
  const url = incidentId ? `${API_BASE}/alerts?incident_id=${incidentId}` : `${API_BASE}/alerts`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch alerts');
  return res.json();
}

export async function fetchIncidents() {
  const res = await fetch(`${API_BASE}/incidents/`);
  if (!res.ok) throw new Error('Failed to fetch incidents');
  return res.json();
}

export async function fetchIncidentDetails(id) {
  const res = await fetch(`${API_BASE}/incidents/${id}`);
  if (!res.ok) throw new Error('Failed to fetch incident details');
  return res.json();
}

export async function approveRemediation(incidentId, approvedBy = 'Hackathon Operator') {
  const res = await fetch(`${API_BASE}/incidents/${incidentId}/approve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ approved_by: approvedBy }),
  });
  if (!res.ok) throw new Error('Failed to approve remediation');
  return res.json();
}

export async function triggerEcommerceIncident() {
  const res = await fetch(`${API_BASE}/simulation/trigger-ecommerce-incident`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to trigger simulation');
  return res.json();
}

export async function resetSimulation() {
  const res = await fetch(`${API_BASE}/simulation/reset`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to reset simulation');
  return res.json();
}
