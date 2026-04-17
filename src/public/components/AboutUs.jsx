import React from "react";
import { CheckCircle, Phone } from "lucide-react";
import { useBranding } from "../../shared/hooks/useBranding";

const AboutUs = () => {
  const brand = useBranding();

  return (
    <div className="bg-[#0E0E11] text-[#EAE7E1] ">

      {/* HERO */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

        <img
          src={brand.hero?.image || "/hero.png"}
          className="absolute w-full h-full object-cover scale-105"
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0E0E11]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-6">
            {brand.siteName}
          </h1>

          <p className="text-lg md:text-xl text-[#D6D2C4] mb-8">
            {brand.tagline}
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* INTRO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/dance.jpg"
            className="rounded-xl shadow-2xl"
          />

          <div>
            <span
              style={{ color: brand.colors.primary }}
              className="uppercase text-xs tracking-[0.2em]"
            >
              {brand.preview?.badge}
            </span>

            <h2 className="text-4xl font-serif mt-4 mb-6">
              {brand.preview?.title}
            </h2>

            <p className="text-[#A8A29E] mb-4 leading-relaxed">
              {brand.preview?.description}
            </p>

            <p className="text-sm text-[#78716C] font-medium">
              {brand.preview?.highlight}
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="bg-[#18181C] border border-[#2A2A2F] rounded-2xl p-12">
          <h2 className="text-3xl font-serif text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.features?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#1F1F24] p-4 rounded-lg border border-[#2A2A2F]"
              >
                <CheckCircle
                  size={18}
                  style={{ color: brand.colors.primary }}
                />
                <p className="text-sm text-[#D6D2C4]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COURSES */}
        <div>
          <h2 className="text-3xl font-serif text-center mb-12">
            Our Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {brand.courses?.categories?.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#18181C] border border-[#2A2A2F] rounded-xl p-6 hover:border-[#C6A75E] transition"
              >
                <h3
                  style={{ color: brand.colors.primary }}
                  className="font-semibold text-lg mb-4"
                >
                  {cat.title}
                </h3>

                <ul className="space-y-2 text-sm text-[#A8A29E]">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING FORMAT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/dance2.jpg"
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-serif mb-6">
              {brand.schedule?.title}
            </h2>

            <ul className="space-y-3 text-[#A8A29E]">
              {brand.schedule?.details?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING / CTA */}
        <div className="bg-gradient-to-br from-[#18181C] to-[#1F1F24] border border-[#2A2A2F] rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-serif mb-6">
            {brand.pricingInfo?.title}
          </h2>

          <div className="space-y-2 text-[#A8A29E] mb-8">
            {brand.pricingInfo?.items?.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <a
            href={`tel:${brand.contact?.phone}`}
            style={{ background: brand.colors.primary }}
            className="inline-flex items-center gap-3 text-black px-8 py-3 rounded-md font-bold hover:scale-105 transition"
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