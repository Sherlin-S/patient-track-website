import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import PatientCounter from '../components/PatientCounter'
import PatientTips from '../components/PatientTips'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Dashboard() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <header className="bg-white shadow">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="logo">
            <Image
              src="https://www.logopeople.in/wp-content/uploads/2023/09/hospital-logo4.jpg"
              alt="PatientTrack Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <ul className="flex gap-4 text-lg">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/register" className="hover:underline">Register Patient</Link></li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-8">Admin Dashboard</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link href="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Register New Patient
            </button>
          </Link>
          <Link href="/patients">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              View Registered Patients
            </button>
          </Link>
        </div>

        {/* Additional Dashboard Widgets */}
        <div className="flex flex-col items-center gap-10">
          <PatientCounter />
          <PatientTips />
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>
    </div>
  );
}
