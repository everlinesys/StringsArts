import React from "react";
import { CheckCircle, Music, Star, Laptop, Award, Phone } from "lucide-react";
import { useBranding } from "../../shared/hooks/useBranding";

const AboutUs = () => {
  const brand = useBranding();

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={brand.hero?.image || "/hero.png"}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {brand.siteName}
          </h1>
          <p className="text-xl opacity-90 mb-6">
            {brand.tagline}
          </p>

          <button
            style={{ background: brand.colors.primary }}
            className="text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Explore Programs
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* INTRO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <img
            src={"/hero.png"}
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <span
              style={{ color: brand.colors.primary }}
              className="font-bold uppercase text-sm tracking-widest"
            >
              {brand.preview?.badge}
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              {brand.preview?.title}
            </h2>

            <p className="text-lg text-slate-600 mb-4">
              {brand.preview?.description}
            </p>

            <p className="text-sm text-slate-500 font-semibold">
              {brand.preview?.highlight}
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="bg-slate-50 rounded-[3rem] p-12 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.features?.map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle style={{ color: brand.colors.primary }} />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COURSES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {brand.courses?.categories?.map((cat, idx) => (
              <div key={idx} className="border rounded-2xl p-6">
                <h3
                  style={{ color: brand.colors.primary }}
                  className="font-bold text-lg mb-4"
                >
                  {cat.title}
                </h3>

                <ul className="space-y-2 text-sm text-slate-600">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING FORMAT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <img
            src="/logo.png"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              {brand.schedule?.title}
            </h2>

            <ul className="space-y-3 text-slate-600">
              {brand.schedule?.details?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING */}
        <div className="bg-white border rounded-[2rem] p-10 text-center shadow-sm mb-24">
          <h2 className="text-3xl font-bold mb-6">
            {brand.pricingInfo?.title}
          </h2>

          <div className="space-y-2 text-slate-600 mb-8">
            {brand.pricingInfo?.items?.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <a
            href={`tel:${brand.contact?.phone}`}
            style={{ background: brand.colors.primary }}
            className="inline-flex items-center gap-3 text-white px-6 py-3 rounded-full font-bold"
          >
            <Phone size={18} />
            Call {brand.contact?.phone}
          </a>
        </div>

      

      </div>
    </div>
  );
};

export default AboutUs;