import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About CMBS
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Advancing the science of mind, behaviour, and human potential.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
            alt="counselling"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Council for Mind and Behavioural Studies
            </h2>
            <p className="mb-4">
              CMBS is an autonomous professional council dedicated to promoting
              education, research, and excellence in psychology and behavioural sciences.
            </p>
            <p>
              We bridge academic knowledge with real-world application through
              structured programs, research, and professional training.
            </p>
          </div>
        </div>

        {/* OBJECTIVES */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Promote psychology & behavioural education",
              "Encourage research & innovation",
              "Provide professional training",
              "Organize seminars & workshops",
              "Offer certifications & diplomas",
              "Support mental wellness awareness",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border hover:shadow-lg transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRAMS */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <ul className="space-y-3">
              <li>• Certificate Courses</li>
              <li>• Diploma & Advanced Programs</li>
              <li>• Webinars & Seminars</li>
              <li>• Research Initiatives</li>
              <li>• Internship Programs</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="learning"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* VALUES */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Integrity",
              "Academic Excellence",
              "Innovation",
              "Social Responsibility",
            ].map((val, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold">{val}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* QUALITY */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="research"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Quality Policy</h2>
            <p className="mb-3">
              We ensure academic credibility, continuous improvement, and
              evidence-based learning in all programs.
            </p>
            <p>
              Our focus is delivering high-quality education with real-world
              relevance and professional impact.
            </p>
          </div>
        </div>

        {/* COMMITMENT */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p>
            We believe understanding the human mind is essential for a better society.
            Through education and research, we develop emotionally intelligent,
            self-aware individuals who create meaningful impact.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;