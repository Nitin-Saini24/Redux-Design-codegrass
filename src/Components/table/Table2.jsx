import React from "react";

export default function Table2({ title, columns, data }) {
  return (
    <div className="mb-2 p-4 bg-white border border-stroke shadow-md rounded col-span-12">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full leading-normal border-separate border-spacing-x-0 border-spacing-y-0">
          <thead>
            <tr className="rounded-md">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-5 py-3 bg-blue-600  min-w-40 text-white  shadow-lg text-left text-sm uppercase font-normal"
                >
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div className="max-w-full max-h-48 overflow-x-auto no-scrollbar-w">
          <table className=" leading-normal w-full border-separate border-spacing-x-0 border-spacing-y-3 ">
            <tbody className="">
              {data.map((row, index) => (
                <tr key={index} className="border-black shadow-lg">
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`${
                        colIndex === 0 && colIndex === columns.length - 1
                          ? "rounded-l-md rounded-r-lg  "
                          : colIndex === 0
                          ? "rounded-l-md border-l pl-2"
                          : colIndex === columns.length - 1
                          ? "rounded-r-md border-r pr-2"
                          : ""
                      }  py-1 px-4  border-b border-t min-w-40 border-black`}
                    >
                      {row[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
