import { useState } from "react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How to post an ad?",
      a: "Click the “Post Ad” button in the top navigation bar, upload clear photos, set your price, and add a description.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. We follow best practices to protect your personal information and never share it without consent.",
    },
    {
      q: "How to report a scam?",
      a: "Use the report option on the listing or contact our support team immediately.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-16">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#0aa78f] mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have a question or need assistance? Our team is here to help you.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6 mb-16">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Tell us how we can help..."
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
          />
        </div>

        <button className="w-full bg-[#0aa78f] text-white py-2.5 rounded-md font-medium hover:bg-[#099b85]">
          Send Message
        </button>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow px-4 py-3 cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm">{item.q}</p>
                <span>{openFaq === index ? "−" : "+"}</span>
              </div>

              {openFaq === index && (
                <p className="text-sm text-gray-600 mt-2">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-sm border px-4 py-2 rounded-md hover:bg-gray-100">
            Visit Help Center →
          </button>
        </div>
      </div>
    </div>
  );
}