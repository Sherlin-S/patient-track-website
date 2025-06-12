import { useState } from "react";

export default function AskDoubt() {
  const [input, setInput] = useState(""); // ✅ Add this
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    if (!input.trim()) {
      setResponse("Please enter a question.");
      return;
    }

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.response || "No valid response received.");
    } catch (error) {
      console.error("Fetch error:", error);
      setResponse("Failed to get response.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ask Your Doubts</h2>
      <input
        type="text"
        placeholder="Enter your medical question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Ask AI
      </button>
      <div className="mt-4">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
