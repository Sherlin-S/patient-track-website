"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("patients") || "[]");
    setPatients(stored);
  }, []);

  return (
    <div>
      <header>
        <nav className="flex justify-between items-center px-6 py-4 shadow-md">
          <div className="logo">
            <Image
              src="https://www.logopeople.in/wp-content/uploads/2023/09/hospital-logo4.jpg"
              alt="PatientTrack Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <ul className="flex gap-6 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Discharge Info</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-4 py-2">{p.fullname}</td>
                <td className="border px-4 py-2">{p.age}</td>
                <td className="border px-4 py-2">{p.gender}</td>
                <td className="border px-4 py-2">{p.opip || "-"}</td>
                <td className="border px-4 py-2">
                  {p.opip === "IP" ? (p.discharged ? "Discharged" : "Not Discharged") : "Active"}
                </td>
                <td className="border px-4 py-2">
                  {p.discharged && p.dischargeDetails ? (
                    <div>
                      <p><strong>Reason:</strong> {p.dischargeDetails.reason}</p>
                      <p><strong>Date:</strong> {p.dischargeDetails.date}</p>
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>
    </div>
  );
}
