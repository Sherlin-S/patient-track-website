"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function DischargePage() {
  const [patients, setPatients] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [reason, setReason] = useState("");
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patients") || "[]");
    setPatients(data);
  }, []);

  const handleDischarge = () => {
    if (selectedIndex === -1 || reason.trim() === "") return;

    const updated = [...patients];
    updated[selectedIndex].discharged = true;
    updated[selectedIndex].status = "Discharged";
    updated[selectedIndex].dischargeDetails = {
      reason,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem("patients", JSON.stringify(updated));
    setPatients(updated);
    setReason("");
    setSelectedIndex(-1);
    alert("✅ Patient discharged.");
    router.push("/patients");
  };

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

      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Discharge a Patient</h2>
        <select
          className="w-full border p-2 mb-4 rounded"
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          <option value={-1}>Select Patient</option>
          {patients.map((p, idx) =>
            !p.discharged && p.opip === "IP" ? (
              <option key={idx} value={idx}>
                {p.fullname} ({p.opip})
              </option>
            ) : null
          )}
        </select>

        <textarea
          placeholder="Reason for discharge"
          className="w-full border p-2 rounded mb-4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button
          onClick={handleDischarge}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Discharge
        </button>
      </div>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>
    </div>
  );
}
