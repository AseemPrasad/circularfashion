import React, { useState } from "react";

const Contribute = () => {
  const [type, setType] = useState("blog");

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-emerald-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contribute Content</h1>
        <p className="mt-3 max-w-xl mx-auto opacity-90">
          Share blogs, events, or resources to support circular fashion and sustainability.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="blog">Blog</option>
            <option value="event">Event</option>
            <option value="resource">Resource</option>
          </select>
        </div>

        <form className="bg-white p-6 rounded-xl border space-y-5">
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-lg px-3 py-2"
          />

          {type !== "resource" && (
            <input
              type="text"
              placeholder="Author / Organizer"
              className="w-full border rounded-lg px-3 py-2"
            />
          )}

          {type === "event" && (
            <>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Location / Online"
                className="w-full border rounded-lg px-3 py-2"
              />
            </>
          )}

          {type === "resource" && (
            <input
              type="url"
              placeholder="Resource Link"
              className="w-full border rounded-lg px-3 py-2"
            />
          )}

          <textarea
            placeholder="Description"
            rows={4}
            className="w-full border rounded-lg px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition"
          >
            Submit for Review
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Submissions are reviewed before publishing.
        </p>
      </div>
    </div>
  );
};

export default Contribute;
