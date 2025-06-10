import PatientCounter from "@/components/PatientCounter";
import PatientTips from "@/components/PatientTips";

export default function Dashboard() {
  return (
    <main className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Admin Dashboard
      </h1>

      <div className="flex flex-col items-center gap-10">
        <PatientCounter />
        <PatientTips />
      </div>
    </main>
  );
}
