import Image from "next/image";
import Link from "next/link";
import LoginMessage from "../components/LoginMessage";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Login() {
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

      <section className="max-w-md mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form action="/dashboard" method="get" className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>

      {/* ✅ Scoped CSS for logo image */}
      <style jsx>{`
        .logo img {
          height: 48px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
