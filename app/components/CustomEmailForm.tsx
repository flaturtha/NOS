import { useState } from "react";

export default function CustomEmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Submitting email:", email);
      
      // Use the webhook endpoint that GHL provides
      const res = await fetch("https://webhooks.gohighlevel.com/webhook/9oIwOEVxyUx4GgEzgNPK", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          firstName: "",
          lastName: "",
          phone: "",
          company: "",
          website: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          country: "",
          customField: "",
          tags: [],
          source: "NOS Landing Page"
        }),
      });

      console.log("Response status:", res.status);
      console.log("Response headers:", res.headers);

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("GHL Webhook Error:", errorData);
        console.error("Response status:", res.status);
        setError(`Submission failed (${res.status}). Please try again.`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="text-green-600 font-medium text-center">
        ✅ Thanks! Check your inbox for your book.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium mb-2"
      >
        Continue ...
      </button>

      {error && <p className="text-red-600 text-sm text-center mb-2">{error}</p>}
    </form>
  );
}
