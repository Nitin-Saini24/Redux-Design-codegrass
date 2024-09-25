import React, { useState, useEffect } from "react";
// import { XIcon } from "@heroicons/react/solid"; // Tailwind CSS Heroicons (Optional)

const EditSidebar = ({ admin, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    role: "",
    status: "",
  });

  useEffect(() => {
    if (admin) {
      setFormData(admin); // Load the selected admin data into the form
    }
  }, [admin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated data
  };

  return (
    <div className="absolute inset-0 z-50 flex justify-end">
      <div className="bg-white w-1/3 h-full z-10 shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Edit Admin</h2>
          <button onClick={onClose}>
            Close
            {/* <XIcon className="h-6 w-6 text-gray-600" /> */}
          </button>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Contact No.</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default EditSidebar;
