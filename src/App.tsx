import React, { useState, useEffect } from 'react';

interface Alert {
  id: number;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

const alerts: Alert[] = [
  { id: 1, title: 'Suspicious USB Connection', description: 'A suspicious USB connection has been detected.', severity: 'high' },
  { id: 2, title: 'Unsecured Wi-Fi Network', description: 'You are connected to an unsecured Wi-Fi network.', severity: 'medium' },
  { id: 3, title: 'Outdated Operating System', description: 'Your operating system is outdated and vulnerable to attacks.', severity: 'low' },
];

const JuiceJackingAlertApp = () => {
  const [alertsVisible, setAlertsVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharging(!charging);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [charging]);

  const handleShowAlerts = () => {
    setAlertsVisible(true);
  };

  const handleHideAlerts = () => {
    setAlertsVisible(false);
  };

  const handleSelectAlert = (alert: Alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">Juice Jacking Attack Alert System</h1>
      <p className="text-gray-600">Stay safe from juice jacking attacks with our alert system.</p>
      <div className="flex justify-center mt-8">
        {charging ? (
          <div className="text-green-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3L5 6.99h3.99L9 12 6.99 15.99 9 19l3.99-3.99L15 12l-3.99-3.99z"></path>
            </svg>
            <span>Charging...</span>
          </div>
        ) : (
          <div className="text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Not Charging</span>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md text-gray-600"
          onClick={handleShowAlerts}
        >
          Show Alerts
        </button>
        <button
          className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md text-gray-600 ml-4"
          onClick={handleHideAlerts}
        >
          Hide Alerts
        </button>
      </div>
      {alertsVisible && (
        <div className="mt-8">
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-gray-100 py-2 px-4 rounded-md mb-4">
              <h2 className="text-lg font-bold text-gray-900">{alert.title}</h2>
              <p className="text-gray-600">{alert.description}</p>
              <p className="text-gray-600">Severity: {alert.severity}</p>
              <button
                className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md text-gray-600"
                onClick={() => handleSelectAlert(alert)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
      {selectedAlert && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">{selectedAlert.title}</h2>
          <p className="text-gray-600">{selectedAlert.description}</p>
          <p className="text-gray-600">Severity: {selectedAlert.severity}</p>
        </div>
      )}
    </div>
  );
};

export default JuiceJackingAlertApp;