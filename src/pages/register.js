"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("patients") || "[]");
    existing.push(formData);
    localStorage.setItem("patients", JSON.stringify(existing));

    setMessage("✅ Patient registered successfully!");

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

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

      <section className="max-w-md mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Patient</h2>

        {message && (
          <div className="text-green-600 text-center mb-4 font-medium">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="p-2 rounded border border-gray-300"
            value={formData.fullname}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            min="0"
            required
            className="p-2 rounded border border-gray-300"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            required
            className="p-2 rounded border border-gray-300"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            className="p-2 rounded border border-gray-300"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2 rounded border border-gray-300"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>

        <div className="text-center mt-6">
          <Link href="/dashboard">
            <button className="btn bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 PatientTrack. Built with care for better care.</p>
      </footer>

      <style jsx>{`
        .logo img {
          height: 48px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
