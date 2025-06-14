"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function PatientCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, "patients"));
        setCount(snapshot.size); // ✅ snapshot.size is the number of documents
      } catch (error) {
        console.error("Error fetching patient count:", error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded text-center max-w-sm mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-2">Total Registered Patients</h3>
      <p className="text-4xl text-blue-600 font-mono">{count}</p>
    </div>
  );
}
