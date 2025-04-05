"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setImageUrl("");

    try {
      const formData = new FormData();
      formData.append("prompt", prompt);

      const res = await fetch("https://ai-gen-img-backend.onrender.com/generate-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.image_base64) {
        setImageUrl(`data:image/png;base64,${data.image_base64}`);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AI Image Generator</h1>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full max-w-md p-2 border rounded mb-4"
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Generated"
          className="mt-8 max-w-md rounded shadow-md"
        />
      )}
    </main>
  );
}
