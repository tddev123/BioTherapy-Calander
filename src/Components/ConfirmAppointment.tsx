import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ConfirmAppointment: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract query parameters
  const date = queryParams.get("date");
  const time = queryParams.get("time");
  const therapyType = queryParams.get("therapyType") || "Not specified";

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Appointment confirmed!");
  };

  const incrementDay = (dateString: string) => {
    const dateObj = new Date(dateString);
    dateObj.setDate(dateObj.getDate() + 1);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="pt-36 pb-24 flex flex-col items-center bg-white shadow-lg rounded-lg mx-6 md:mx-20 lg:mx-40 px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Confirm Your Appointment
          </h1>
        </div>

        <div className="mb-8 text-center text-gray-700">
          <p className="mb-2">
            <strong>Date:</strong> {incrementDay(date)}
          </p>
          <p className="mb-2">
            <strong>Time:</strong> {time}
          </p>
          <p className="mb-2">
            <strong>Service Type:</strong> {therapyType}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="info"
              className="block text-lg font-medium mb-2 text-gray-800"
            >
              Additional Information:
            </label>
            <textarea
              id="info"
              name="info"
              placeholder="Provide any additional details or questions here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ConfirmAppointment;
