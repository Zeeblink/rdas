import React from 'react';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  content 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#003366] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose} 
            className="hover:bg-[#FF6600]/20 p-2 rounded-full transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 text-gray-700">
          <p className="leading-relaxed">{content}</p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-white bg-[#003366] hover:bg-[#003366]/90 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;