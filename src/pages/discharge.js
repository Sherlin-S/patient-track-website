"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { db } from "../../lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function DischargePage() {
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [reason, setReason] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPatients(list);
    };
    fetchPatients();
  }, []);

  const handleDischarge = async () => {
    if (!selectedId || reason.trim() === "") return;

    const docRef = doc(db, "patients", selectedId);
    await updateDoc(docRef, {
      discharged: true,
      status: "Discharged",
      dischargeDetails: {
        reason,
        date: new Date().toLocaleDateString()
      }
    });

    alert("✅ Patient discharged successfully");
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
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">Select Patient</option>
          {patients
            .filter(p => p.opip === "IP" && !p.discharged)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.fullname} ({p.opip})
              </option>
            ))}
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
