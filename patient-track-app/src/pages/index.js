// pages/index.js or app/page.js
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
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
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-b from-blue-400 to-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to PatientTrack</h1>
        <p className="text-lg mb-6">
          Streamline hospital operations with real-time patient flow and status tracking.
        </p>
        <a href="#features">

          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"></button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-300">
            Explore Features
          </button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About PatientTrack</h2>
        <p className="text-lg">
          PatientTrack is a web-based solution designed to enhance hospital efficiency by digitizing patient flow management. Our system supports both inpatients and outpatients, providing real-time updates to reduce wait times and improve care delivery.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <h2 className="text-3xl text-center font-semibold mb-10">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Image
              src="https://interhospi.com/wp-content/uploads/sites/3/2022/12/blueIOT-scaled.jpg"
              alt="Real-Time Tracking"
              width={400}
              height={250}
              className="feature-image"
            />
            <h3 className="text-xl font-semibold mt-4">Real-Time Updates</h3>
            <p className="mt-2">Monitor patient status instantly across departments.</p>
          </div>
          <div className="text-center">
            <Image
              src="https://www.shutterstock.com/image-photo/online-medical-records-document-management-260nw-2474238105.jpg"
              alt="Admin Control"
              width={400}
              height={250}
              className="feature-image"
            />
            <h3 className="text-xl font-semibold mt-4">Administrative Control</h3>
            <p className="mt-2">Centralized dashboard for efficient management.</p>
          </div>
          <div className="text-center">
            <Image
              src="https://www.ripplesiot.com/wp-content/uploads/2022/12/patient-wait.png"
              alt="Reduced Wait Times"
              width={400}
              height={250}
              className="feature-image"
            />
            <h3 className="text-xl font-semibold mt-4">Reduced Wait Times</h3>
            <p className="mt-2">Optimize patient flow to minimize delays.</p>
          </div>
        </div>
      </section>

      {/* Login Call-to-Action */}
      <section id="login" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Access Your Account</h2>
        <p className="text-lg mb-6">Log in to manage patient flow or register new patients to get started!</p>
        <a href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </a>
      </section>

      <footer className="bg-blue-200 text-gray-800 text-center py-6">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>

      {/* Internal CSS using JSX style */}
      <style jsx>{`
        .feature-image {
          border-radius: 0.5rem;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .feature-image:hover {
          transform: scale(1.05);
        }
        .logo img {
          height: 48px;
        }
        .feature-image {
          border-radius: 0.5rem;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
