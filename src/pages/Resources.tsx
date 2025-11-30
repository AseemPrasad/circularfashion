import React from "react";
import resourcesData from "../data/resources.json";

const Resources: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {resourcesData.title}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            {resourcesData.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {resourcesData.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {section.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 font-medium hover:underline"
                  >
                    {item.linkText}
                    <span className="ml-1"></span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Resources;
