"use client";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";

export default function TodoTable({ data }) {
  const dataTitle = Object.keys(data[0]).map((key) => {
    return { field: key };
  });

  console.log(dataTitle);
  const [tableData, setTableData] = useState(Object.values(data));
  const [tableTitle] = useState(dataTitle);

  

  useEffect(() => {
    setTableData(Object.values(data));
  }, [data]);

  return (
    <div style={{ flex: 1, height: "100%" }}>
      <h1>AG GRID PAGE</h1>
      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "200px" }}
      >
        <AgGridReact rowData={tableData} columnDefs={tableTitle} />
      </div>
    </div>
  );
}
