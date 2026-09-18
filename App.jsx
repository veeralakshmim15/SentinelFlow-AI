import React, { useState } from 'react';
import Presentation from './pages/Presentation';
import Dashboard from './pages/Dashboard';
import IncidentDetails from './pages/IncidentDetails';
import Landing from './pages/Landing';

export default function App() {
  const [currentPage, setCurrentPage] = useState('presentation'); // Default to Pitch Deck presentation as FIRST thing!
  const [selectedIncidentId, setSelectedIncidentId] = useState(null);

  function handleViewIncident(id) {
    setSelectedIncidentId(id);
    setCurrentPage('incident-details');
  }

  function handleTriggerIncidentFromDeck() {
    setCurrentPage('dashboard');
  }

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setCurrentPage('presentation')}>
          <span className="brand-text">SentinelFlow <span className="badge-ai">AI</span></span>
          <span className="problem-tag">AI-01 Solution</span>
        </div>

        <div className="nav-links">
          <button className={`nav-link ${currentPage === 'presentation' ? 'active' : ''}`} onClick={() => setCurrentPage('presentation')}>
            🏆 11-Slide Pitch Deck
          </button>
          <button className={`nav-link ${currentPage === 'dashboard' || currentPage === 'incident-details' ? 'active' : ''}`} onClick={() => setCurrentPage('dashboard')}>
            ⚡ Operations Console
          </button>
          <button className={`nav-link ${currentPage === 'landing' ? 'active' : ''}`} onClick={() => setCurrentPage('landing')}>
            📜 Overview
          </button>
        </div>
      </nav>

      {/* Main Page View */}
      <main className="main-content">
        {currentPage === 'presentation' && <Presentation onTriggerIncident={handleTriggerIncidentFromDeck} />}
        {currentPage === 'dashboard' && <Dashboard onViewIncidentDetails={handleViewIncident} />}
        {currentPage === 'incident-details' && (
          <IncidentDetails incidentId={selectedIncidentId} onBack={() => setCurrentPage('dashboard')} />
        )}
        {currentPage === 'landing' && <Landing onNavigateToDashboard={() => setCurrentPage('dashboard')} />}
      </main>
    </div>
  );
}
