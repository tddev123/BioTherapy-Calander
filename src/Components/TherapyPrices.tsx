import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

interface Therapy {
  name: string;
  image: string;
  description: string;
  detailedDescription: string; // Add detailed description field
  price: string;
}

const therapies: Therapy[] = [
  {
    name: "Stem Cell Therapy",
    image:
      "https://cdn.prod.website-files.com/650abba24f5e58ac9656b711/65e7be19a004ae3b1b836466_Regenerative%20Stem%20Cell%20Therapy.webp",
    description:
      "Stem Cell Therapy uses stem cells to repair damaged tissues and organs.",
    detailedDescription:
      "This revolutionary therapy harnesses the body’s own ability to regenerate. Stem cells are used to treat a range of conditions, including degenerative diseases, chronic pain, and tissue damage. By introducing new, healthy stem cells into the affected areas, patients may experience reduced inflammation, improved healing, and restored function in damaged tissues.",
    price: "$5,000 - $10,000",
  },
  {
    name: "Gene Therapy",
    image:
      "https://infusionassociates.com/wp-content/uploads/2020/05/What-is-Biological-Therapy.jpg",
    description:
      "Gene Therapy aims to correct or replace defective genes responsible for disease.",
    detailedDescription:
      "Gene therapy offers a cutting-edge approach to treating genetic disorders by directly modifying or replacing faulty genes. This therapy holds the potential to cure hereditary conditions like cystic fibrosis, hemophilia, and certain forms of cancer, offering hope to patients for long-term health improvements.",
    price: "$15,000 - $20,000",
  },
  {
    name: "Immunotherapy",
    image:
      "https://www.arizonabloodandcancerspecialists.com/media/assets/AdobeStock_230823047-What-is-Immunotherapy-scaled-9af7864b.jpeg",
    description:
      "Immunotherapy enhances the body's natural defenses to fight cancer.",
    detailedDescription:
      "Immunotherapy works by boosting or restoring the immune system's ability to target and destroy cancer cells. It's particularly effective for types of cancers that have been resistant to other treatments. Patients may experience fewer side effects than traditional chemotherapy.",
    price: "$7,000 - $12,000",
  },
  {
    name: "Regenerative Medicine",
    image:
      "https://media.springernature.com/w580h326/nature-cms/uploads/collections/regenerative-medicine-outlook-ab660462b3e1a1d31e7d461a43ffc09f-25cab06902962b4b3de00b870ac1bf27.jpg",
    description:
      "Regenerative Medicine focuses on repairing or replacing damaged cells, tissues, and organs.",
    detailedDescription:
      "This approach uses biomaterials, cells, and growth factors to enhance the body's ability to heal itself. Regenerative medicine is widely used in orthopedics, cardiology, and wound healing, providing treatments for conditions that were once thought untreatable.",
    price: "$4,000 - $9,000",
  },
  {
    name: "Monoclonal Antibodies",
    image:
      "https://www.nih.gov/sites/default/files/news-events/news-releases/2020/20200810-preventio-covid.png",
    description:
      "Monoclonal Antibodies are lab-made molecules that mimic the immune system's ability to fight off pathogens.",
    detailedDescription:
      "Monoclonal antibodies are designed to target specific antigens, such as cancer cells or viruses. They have become a powerful tool in treating diseases like COVID-19, autoimmune disorders, and certain types of cancer, often resulting in faster recovery times and more targeted treatment.",
    price: "$3,500 - $8,000",
  },
  {
    name: "Personalized Medicine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0-zMpC4IBV24gwxJ-m5qkXIrnz7QLR8ARQ&s",
    description:
      "Personalized Medicine tailors treatment based on individual genetic, environmental, and lifestyle factors.",
    detailedDescription:
      "Personalized medicine allows for a highly tailored approach to treatment, ensuring that each patient receives the most effective therapy based on their unique genetic makeup. This can lead to better outcomes, especially in complex diseases like cancer, where one-size-fits-all treatments often fall short.",
    price: "Varies",
  },
];

const TherapyPrices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col mt-24">
      <Header />
      <main className="flex-1 p-6 md:p-10 bg-gradient-to-r from-gray-50 to-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Explore Our Therapy Prices
        </h2>
        <div className="space-y-12">
          {therapies.map((therapy) => (
            <div
              key={therapy.name}
              className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Therapy Image */}
              <img
                src={therapy.image}
                alt={therapy.name}
                className="w-full h-64 object-cover md:h-auto"
              />

              {/* Therapy Details */}
              <div className="p-6 flex flex-col justify-between bg-gray-50">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {therapy.name}
                  </h3>
                  <p className="text-gray-700 mb-2">{therapy.description}</p>
                  <p className="text-gray-600 mb-6">
                    {therapy.detailedDescription}
                  </p>
                </div>
                {/* Price & Action */}
                <div className="mt-auto">
                  <p className="text-xl font-bold text-gray-800 mb-4">
                    {therapy.price}
                  </p>
                  <button
                    onClick={() => navigate("/scheduler")}
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300"
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TherapyPrices;
