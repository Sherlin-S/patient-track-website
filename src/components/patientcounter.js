"use client";
import { useEffect, useState } from "react";

export default function PatientCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("patients");
    const patientList = stored ? JSON.parse(stored) : [];
    setCount(patientList.length);
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded text-center max-w-sm mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-2">Total Registered Patients</h3>
      <p className="text-4xl text-blue-600 font-mono">{count}</p>
    </div>
  );
}
