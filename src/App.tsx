import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-900 tracking-wide">
            Intelek Sukses
          </span>
          <div className="space-x-6 text-gray-600 font-medium">
            <a href="#about" className="hover:text-blue-600 transition">Tentang Kami</a>
            <a href="#programs" className="hover:text-blue-600 transition">Program</a>
            <a href="#contact" className="hover:text-blue-600 transition">Hubungi</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col justify-center items-center">
        <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Pusat Tuisyen Intelek Sukses
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-3xl">
          Memperkasa Minda Muda, <br />
          <span className="text-blue-600">Mencapai Kecemerlangan Akademik</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
          Sertai kelas bimbingan eksklusif kami yang dirancang khas untuk membantu pelajar menguasai subjek teras dengan mudah, yakin, dan cemerlang.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5">
            Daftar Sekarang
          </a>
          <a href="#programs" className="bg-white text-gray-700 font-semibold px-8 py-3.5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            Lihat Program
          </a>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pusat Tuisyen Intelek Sukses. Hak Cipta Terpelihara.
      </footer>
    </div>
  );
}
