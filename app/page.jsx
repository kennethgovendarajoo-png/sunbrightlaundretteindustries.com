export default function SunbrightWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* HEADER */}
      <header className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white text-blue-700 rounded-xl flex items-center justify-center font-bold text-xl">
              SB
            </div>
            <div>
              <h1 className="font-bold text-lg">
                SUNBRIGHT LAUNDRETTE INDUSTRIES SDN BHD
              </h1>
              <p className="text-sm text-blue-100">
                Industrial Laundry Solutions
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Reliable Vendor Laundry Services For Critical Business Operations
          </h2>
          <p className="text-slate-600 mb-6 leading-7">
            We provide industrial laundry solutions for hospitals, hotels, factories,
            and commercial sectors. We specialise in linen processing, uniform rental,
            and maintenance services designed for operational reliability.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-xl">
              Request Quote
            </a>

            <a href="https://wa.me/60129293513" className="border px-6 py-3 rounded-xl">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border">
          <p className="font-semibold mb-4">We serve:</p>
          <ul className="space-y-2 text-slate-700">
            <li>🏥 Hospitals & Healthcare Facilities</li>
            <li>🏨 Hotels & Hospitality Industry</li>
            <li🏭 Factories & Industrial Sector</li>
            <li>👕 Uniform Rental & Maintenance</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Our Services
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Industrial Laundry Services",
              "Hospital & Hotel Linen Processing",
              "Uniform Rental Solutions",
              "Tailoring & Maintenance"
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl border">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>

          <p className="mb-6 text-blue-100">
            Speak with us for industrial laundry solutions tailored to your operations.
          </p>

          <div className="space-y-2 mb-8">
            <p>📧 kenneth.govendarajoo@sunbrightlaundretteindustries.com</p>
            <p>📞 +60 12-929 3513 | +60 14-388 5295</p>
            <p>📍 33, Jalan Teknologi 5/3, 71760 Bandar Baru Enstek, Negeri Sembilan</p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://wa.me/60129293513" className="bg-white text-blue-700 px-6 py-3 rounded-xl">
              WhatsApp 1
            </a>
            <a href="https://wa.me/60143885295" className="bg-white text-blue-700 px-6 py-3 rounded-xl">
              WhatsApp 2
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
