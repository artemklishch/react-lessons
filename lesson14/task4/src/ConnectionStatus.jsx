import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

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
  const classIsOnline = classNames('status', { 'status_offline': !isOnline });
  return <div className={classIsOnline}>Offline</div>;
};
export default ConnectionStatus;