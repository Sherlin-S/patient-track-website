"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("patients");
    if (stored) {
      setPatients(JSON.parse(stored));
    }
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
            <li><Link href="/register">Register Patient</Link></li>
          </ul>
        </nav>
      </header>

      <section className="max-w-xl mx-auto text-center py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6">Registered Patients</h2>

        <div className="space-y-4 text-left">
          {patients.length === 0 ? (
            <p className="text-gray-500">No patients registered yet.</p>
          ) : (
            patients.map((patient, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow border border-gray-200"
              >
                <p><strong>Name:</strong> {patient.fullname}</p>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Contact:</strong> {patient.contact}</p>
                <p><strong>Email:</strong> {patient.email}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-8">
          <Link href="/dashboard">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>

<<<<<<<< HEAD:patient-track-app/src/pages/patients.js
      {/* ✅ Scoped CSS for the logo image */}
========
>>>>>>>> 221c83e010acd759a222efc8505f1a4cebe5b4a4:src/pages/patients.js
      <style jsx>{`
        .logo img {
          height: 48px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
