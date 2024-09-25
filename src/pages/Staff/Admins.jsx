import React, { useState } from "react";
import adminsData from "../../pages/Staff/usertableData";
import UserTable from "./UserTable";
import DeleteConfirmationModal from "./DeleteConfirmation";
import EditSidebar from "./EditSidebar";

export default function Admins() {
  const [admins, setAdmins] = useState(adminsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedAdmins = admins.filter((admin) => admin.id !== id);
    setAdmins(updatedAdmins);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    const adminToEdit = admins.find((admin) => admin.id === id);
    setSelectedAdmin(adminToEdit);
    setIsSidebarOpen(true);
  };
  const handleUpdate = (updatedAdmin) => {
    const updatedAdmins = admins.map((admin) =>
      admin.id === updatedAdmin.id ? updatedAdmin : admin
    );
    setAdmins(updatedAdmins);
    setIsSidebarOpen(false);
  };

  const handleDeleteClick = (id) => {
    setSelectedAdmin(id);
    setIsModalOpen(true);
  };

  const columns = [
    { header: "Name", field: "name" },
    { header: "Contact No.", field: "contact" },
    { header: "Email ID", field: "email" },
    { header: "Role", field: "role" },
    { header: "Status", field: "status" },
  ];

  return (
    <>
      <UserTable
        data={admins}
        title="Admins"
        columns={columns}
        onDelete={handleDeleteClick}
        onEdit={handleEdit}
        actions={["edit", "delete"]}
      />
      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => handleDelete(selectedAdmin)}
        />
      )}
      {isSidebarOpen && (
        <EditSidebar
          admin={selectedAdmin}
          onClose={() => setIsSidebarOpen(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}
