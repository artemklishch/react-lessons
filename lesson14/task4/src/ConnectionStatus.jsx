import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setOnlineStatus] = useState(true);
  useEffect(() => {
    const handleOnlineClass = () => setOnlineStatus(true);
    const handleOfflineClass = () => setOnlineStatus(false);
    window.addEventListener('online', handleOnlineClass);
    window.addEventListener('offline', handleOfflineClass);
    return () => {
      window.removeEventListener('online', handleOnlineClass);
      window.removeEventListener('offline', handleOfflineClass);
    };
  }, [isOnline]);
  const classIsOnline = isOnline ? 'status' : 'status status_offline'
  return <div className={classIsOnline}>
    {
      isOnline ? "online" : "offline"
    }
  </div>; 
};
export default ConnectionStatus;