import React from "react";

const AnimationModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="fixed inset-0"
        onClick={onClose}
        style={{
          background: `linear-gradient(to right, rgb(69, 79, 252), rgb(21, 33, 233))`,
        }}
      ></div>
      <div className="absolute left-80 flex flex-col justify-center items-center transform rounded-md bg-white p-4">
        {children}
        <p className="text-black text-lg font-semibold py-2">
          Your account has been successfully  created.
        </p>
      </div>
    </div>
  );
};

export default AnimationModal;
