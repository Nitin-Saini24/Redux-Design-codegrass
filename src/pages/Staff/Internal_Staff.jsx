import React, { useState } from "react";
import adminsData from "../../pages/Staff/usertableData";
import UserTable from "./UserTable";

export default function Internal_Staff() {
  const [staff, setStaff] = useState(adminsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedStaff = staff.filter((staff) => staff.id !== id);
    setAdmins(updatedStaff);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    const staffToEdit = staff.find((staff) => staff.id === id);
    setSelectedStaff(staffToEdit);
    setIsSidebarOpen(true);
  };
  // const handleUpdate = (updatedStaff) => {
  //   const updatedStaff = staff.map((staff) =>
  //     staff.id === updatedStaff.id ? updatedStaff : staff
  //   );
  //   setAdmins(updatedStaff);
  //   setIsSidebarOpen(false);
  // };

  // const handleDeleteClick = (id) => {
  //   setSelectedStaff(id);
  //   setIsModalOpen(true);
  // };

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
        data={staff}
        title="Internal Staff"
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
        actions={["edit", "delete"]}
      />
    </>
  );
}
