import { useState, useEffect } from "react";

export default function RegisterMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("🎉 Patient registered successfully!");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-blue-600 text-center mt-4 font-medium">
      {message}
    </div>
  );
}
