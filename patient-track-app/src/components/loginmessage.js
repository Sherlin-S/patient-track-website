import { useState, useEffect } from "react";

export default function LoginMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("✅ You have successfully logged in.");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-green-600 text-center mt-4 font-medium">
      {message}
    </div>
  );
}
