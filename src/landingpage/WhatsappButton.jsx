import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative group"
      >
        <a
          href="https://wa.me/+918129917406?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Knowlumi%20School...
"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 px-4 py-2 bg-white rounded-lg shadow-md text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-300 border border-[#88DB1B]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          Chat with us
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
