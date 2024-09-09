// StemCellTherapyPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const StemCellTherapyPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Stem Cell Therapy</h1>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <img
            src="https://cdn.prod.website-files.com/650abba24f5e58ac9656b711/65e7be19a004ae3b1b836466_Regenerative%20Stem%20Cell%20Therapy.webp"
            alt="Stem Cell Therapy"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">
            What is Stem Cell Therapy?
          </h2>
          <p className="text-gray-700 mt-2">
            Stem Cell Therapy uses stem cells to repair damaged tissues and
            organs.
          </p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Sub-Services</h2>
          <ul className="mt-4 space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">
                Autologous Stem Cell Transplant
              </h3>
              <p className="text-gray-600">
                Using the patient's own stem cells for transplantation.
              </p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">
                Allogeneic Stem Cell Transplant
              </h3>
              <p className="text-gray-600">
                Using stem cells from a donor for transplantation.
              </p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">
                Stem Cell Therapy for Heart Repair
              </h3>
              <p className="text-gray-600">
                Using stem cells to repair damaged heart tissue.
              </p>
            </li>
          </ul>
        </section>
        <div className="mt-8">
          <Link to="/" className="text-blue-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default StemCellTherapyPage;
