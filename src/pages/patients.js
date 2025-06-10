import Image from "next/image";
import Link from "next/link";

export default function PatientsPage() {
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
          <p>Jerin, Age: 34, Male, Contact: 9856734987, Email: jerin@gmail.com</p>
          <p>Jane, Age: 28, Female, Contact: 8072089745, Email: jane@example.com</p>
          <p>Rakesh, Age: 45, Male, Contact: 9056428754, Email: rakesh@example.com</p>
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

      {/* ✅ Scoped CSS for the logo image */}
      <style jsx>{`
        .logo img {
          height: 48px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
