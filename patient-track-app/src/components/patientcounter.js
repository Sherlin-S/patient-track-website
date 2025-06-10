"use client";
import { useState, useEffect } from "react";

export default function PatientCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate fetching patient count from a server or localStorage
    const interval = setInterval(() => {
      // Fake incrementing counter as if patients are being registered
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded text-center max-w-sm mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-2">Total Registered Patients</h3>
      <p className="text-4xl text-blue-600 font-mono">{count}</p>
    </div>
  );
}