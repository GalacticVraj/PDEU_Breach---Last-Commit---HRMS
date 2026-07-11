import React, { useState } from 'react';
import { AlertTriangle, X, Wifi, WifiOff } from 'lucide-react';

const DemoBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        border: '1px solid rgba(255,107,0,0.4)',
        borderRadius: '14px',
        padding: '10px 18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,107,0,0.1)',
        backdropFilter: 'blur(12px)',
        maxWidth: '520px',
        width: 'calc(100vw - 32px)',
        animation: 'slideUp 0.4s ease',
      }}
    >
      {/* Pulsing dot */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          width: 10, height: 10, borderRadius: '50%',
          background: '#FF6B00',
          boxShadow: '0 0 0 0 rgba(255,107,0,0.7)',
          animation: 'pulse 1.5s infinite',
        }} />
      </div>

      <WifiOff size={15} style={{ color: '#FF8C42', flexShrink: 0 }} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ color: '#FF8C42', fontWeight: 700, fontSize: 13 }}>
          Demo Mode
        </span>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, marginLeft: 8 }}>
          Backend not connected — all data is simulated
        </span>
      </div>

      <button
        onClick={() => setDismissed(true)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.35)', padding: 4, flexShrink: 0,
          borderRadius: 6, lineHeight: 0,
        }}
        title="Dismiss"
      >
        <X size={14} />
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,107,0,0.7); }
          70%  { box-shadow: 0 0 0 8px rgba(255,107,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,0,0); }
        }
      `}</style>
    </div>
  );
};

export default DemoBanner;
