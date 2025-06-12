import { useState } from "react";

export default function AskDoubt() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-white text-center px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Ask Your Doubts</h2>
      <textarea
        className="w-full border border-gray-300 rounded p-3 mb-4"
        rows="4"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
      >
        {loading ? "Thinking..." : "Ask Gemini AI"}
      </button>

      {answer && (
        <div className="mt-6 text-left bg-gray-50 p-4 rounded border">
          <h3 className="font-medium mb-2">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
