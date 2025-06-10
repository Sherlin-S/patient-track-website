import Image from "next/image";
import Link from "next/link";
import RegisterMessage from "../components/RegisterMessage";
export default function RegisterPage() {
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
        <form
          action="/dashboard"
          method="get"
          className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            min="0"
            required
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            required
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2 rounded border border-gray-300"
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
