import React from "react";

const DeleteConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this admin?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
