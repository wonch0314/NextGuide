"use client";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

export default function page() {
  const [rowData] = useState([
    { artist: "Nirvana", country: "US", debut: 1987 },
    { artist: "Arctic Monkeys", country: "UK", debut: 2005 },
    { artist: "R.E.M.", country: "US", debut: 1980 },
    { artist: "AC/DC", country: "Australia", debut: 1975 },
    { artist: "Blur", country: "UK", debut: 1990 },
    { artist: "Tahiti80", country: "France", debut: 1993 },
  ]);

  const [columnDefs] = useState([
    { field: "artist" },
    { field: "country" },
    { field: "debut" },
  ]);

  return (
    <div style={{ flex: 1, height: "100%" }}>
      <h1>AG GRID PAGE</h1>
      <div
        className="ag-theme-alpine"
        style={{ width: "200px", height: "200px" }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
}
