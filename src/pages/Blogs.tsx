import React, { useState } from "react";
import blogsData from "../data/blogs.json";
import { ExternalLink, Search } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  description: string;
  url: string;
  tag: string;
  source: string;
}

const Blogs: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogsData.blogs.filter((blog: Blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase()) ||
    blog.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-emerald-800 mb-3">
            Sustainable Fashion Blogs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated articles from trusted platforms on circular fashion, ethics,
            materials, and sustainability innovation.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search blogs, topics, tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog: Blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-6 flex flex-col"
              >
                <span className="text-xs font-semibold text-emerald-700 uppercase mb-2">
                  {blog.tag}
                </span>

                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">
                    Source: {blog.source}
                  </span>

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-700 font-medium hover:underline"
                  >
                    Read
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blogs found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
