"use client";
import { useState, useEffect } from "react";

const tips = [
  "Stay hydrated throughout the day.",
  "Maintain regular check-ups.",
  "Wash hands frequently to avoid infections.",
  "Take your prescribed medications on time.",
  "Maintain a healthy sleep schedule."
];

export default function PatientTips() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 5000); // change tip every 5 seconds

    return () => clearInterval(tipInterval);
  }, []);

  return (
    <div className="bg-blue-100 p-4 rounded shadow text-center mt-10 max-w-xl mx-auto">
      <h4 className="text-xl font-semibold mb-2">Health Tip</h4>
      <p className="text-lg italic text-blue-800 transition duration-500">
        “{tips[index]}”
      </p>
    </div>
  );
}
