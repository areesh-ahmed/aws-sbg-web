"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesLayout({ services }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(services.map(s => s.category))];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-surface border border-subtle rounded-lg p-4 md:sticky top-24 shadow-sm">
          <h3 className="text-lg font-mono font-bold mb-4 text-primary border-b border-subtle pb-2">Categories</h3>
          <ul className="space-y-2 flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {categories.map((category) => (
              <li key={category} className="shrink-0">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-all text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-purple/10 text-purple border border-purple/20"
                      : "text-secondary hover:text-primary hover:bg-canvas border border-transparent"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-mono font-bold text-primary mb-1">
              {selectedCategory === "All" ? "All Services" : `${selectedCategory} Services`}
            </h2>
            <p className="text-secondary text-sm">
              Showing {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-secondary border border-dashed border-subtle rounded-lg">
            No services found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
