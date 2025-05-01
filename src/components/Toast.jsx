import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const toastClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return createPortal(
    <div className={`fixed bottom-4 right-4 z-50 animate-slide-up`}>
      <div className={`${toastClasses[type]} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 hover:opacity-80 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
} 