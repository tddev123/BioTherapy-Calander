import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Data for therapies
const therapies = [
  {
    name: "Stem Cell Therapy",
    image:
      "https://cdn.prod.website-files.com/650abba24f5e58ac9656b711/65e7be19a004ae3b1b836466_Regenerative%20Stem%20Cell%20Therapy.webp",
    description:
      "Stem Cell Therapy uses stem cells to repair damaged tissues and organs.",
  },
  {
    name: "Gene Therapy",
    image:
      "https://infusionassociates.com/wp-content/uploads/2020/05/What-is-Biological-Therapy.jpg",
    description:
      "Gene Therapy aims to correct or replace defective genes responsible for disease.",
  },
  {
    name: "Immunotherapy",
    image:
      "https://www.arizonabloodandcancerspecialists.com/media/assets/AdobeStock_230823047-What-is-Immunotherapy-scaled-9af7864b.jpeg",
    description:
      "Immunotherapy enhances the body's natural defenses to fight cancer.",
  },
  {
    name: "Regenerative Medicine",
    image:
      "https://media.springernature.com/w580h326/nature-cms/uploads/collections/regenerative-medicine-outlook-ab660462b3e1a1d31e7d461a43ffc09f-25cab06902962b4b3de00b870ac1bf27.jpg",
    description:
      "Regenerative Medicine focuses on repairing or replacing damaged cells, tissues, and organs.",
  },
  {
    name: "Monoclonal Antibodies",
    image:
      "https://www.nih.gov/sites/default/files/news-events/news-releases/2020/20200810-preventio-covid.png",
    description:
      "Monoclonal Antibodies are lab-made molecules that mimic the immune system's ability to fight off pathogens.",
  },
  {
    name: "Personalized Medicine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0-zMpC4IBV24gwxJ-m5qkXIrnz7QLR8ARQ&s",
    description:
      "Personalized Medicine tailors treatment based on individual genetic, environmental, and lifestyle factors.",
  },
];

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectTherapy = (therapyName: string) => {
    localStorage.setItem("selectedTherapy", therapyName);
    navigate("/scheduler"); // Navigate to the calendar/scheduling page
  };

  return (
    <body className="container">
      <div className="bg-gray-100 min-h-screen flex flex-col pb-24">
        <Header />
        <div className="homepage flex-1 mt-20">
          {/* Introduction Section */}

          {/* Therapy Options */}
          <main className="p-6 md:p-10 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
              Schedule A Therapy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {therapies.map((therapy) => (
                <div
                  key={therapy.name}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={therapy.image}
                    alt={therapy.name}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
                      {therapy.name}
                    </h3>
                    <p className="text-gray-700 h-24 mb-4">
                      {therapy.description}
                    </p>
                    <button
                      onClick={() => handleSelectTherapy(therapy.name)}
                      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white shadow-md w-full font-semibold transition duration-300"
                    >
                      Schedule Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Homepage;
