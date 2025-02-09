// LoadingSpinner.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto w-full">
      <motion.div
        className="w-16 h-16 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
};

export default LoadingSpinner;
