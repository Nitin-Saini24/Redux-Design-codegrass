import React, { useState } from "react";

const UserTable = ({ data, onDelete, onEdit, title, columns, actions }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            My Notifications
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            My Profile
          </button>
        </div> */}
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery} // Bind search input value to state
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Create New
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th key={index} className="border p-2 text-left">
                {column.header}
              </th>
            ))}
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Display filtered data */}
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="border p-2">
                  {row[column.field]}
                </td>
              ))}
              <td className="border p-2">
                {actions.includes("edit") && (
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                    onClick={() => onEdit(row.id)}
                  >
                    Edit
                  </button>
                )}
                {actions.includes("delete") && (
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => onDelete(row.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center p-4">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>
          <label>Show</label>
          <select className="ml-2 border border-gray-300 rounded px-2 py-1">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="ml-2">Entries</span>
        </div>
        <div className="flex items-center">
          <button className="px-3 py-1 bg-gray-200 rounded mr-2">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded mx-2">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded">3</button>
          <button className="px-3 py-1 bg-gray-200 rounded ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
