import React, { useState, useEffect } from "react";
import "./Scheduler.css";
import DayColumn from "./DayColumn";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  format,
} from "date-fns";

import Header from "./Header";
import Footer from "./Footer";

export interface Availability {
  [date: string]: string[]; // Example: { '2024-08-07': ['08:00', '09:00', '10:00'] }
}

const generateHourlySlotsForMonth = (
  startDate: Date,
  endDate: Date
): Availability => {
  const availability: Availability = {};
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateString = format(currentDate, "yyyy-MM-dd"); // Format: YYYY-MM-DD
    availability[dateString] = Array.from(
      { length: 12 },
      (_, i) => `${i + 1}:00 PM`
    ); // Adjusted format
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return availability;
};

const Scheduler: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [availability, setAvailability] = useState<Availability>({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [therapyType, setTherapyType] = useState<string>("");

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday as the first day
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const datesInMonth = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const storedTherapyType = localStorage.getItem("selectedTherapy");
    if (storedTherapyType) {
      setTherapyType(storedTherapyType);
    }
  }, []);

  useEffect(() => {
    setAvailability(generateHourlySlotsForMonth(monthStart, monthEnd));
  }, [currentMonth]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);

    // Update availability by removing the selected time
    setAvailability((prev) => {
      const updatedAvailability = { ...prev };
      const times = updatedAvailability[appointment.date];
      if (times) {
        updatedAvailability[appointment.date] = times.filter(
          (time) => time !== appointment.time
        );
        if (updatedAvailability[appointment.date].length === 0) {
          delete updatedAvailability[appointment.date];
        }
      }
      return updatedAvailability;
    });
  };

  const removeAppointment = (id: number) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
  };

  return (
    <body>
      <Header />

      <div className="scheduler-container pt-36 pb-20">
        <header className="scheduler-header">
          <button onClick={handlePrevMonth}>Previous</button>
          <h2>{format(currentMonth, "MMMM yyyy")}</h2>
          <button onClick={handleNextMonth}>Next</button>
          <div className="therapy-type font-mediumtext-xl">
            <span className="text-2xl font-semibold">{therapyType}</span>
          </div>
        </header>
        <div className="scheduler">
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <div key={day} className="scheduler-day-label">
              {day}
            </div>
          ))}
          {datesInMonth.map((date) => {
            const formattedDate = format(date, "yyyy-MM-dd");
            return (
              <DayColumn
                key={formattedDate}
                date={formattedDate}
                day={format(date, "d")} // Day of the month
                appointments={appointments.filter(
                  (appt) => appt.date === formattedDate
                )}
                onAdd={addAppointment}
                onRemove={removeAppointment}
                isCurrentMonth={
                  format(date, "MM") === format(currentMonth, "MM")
                }
                availableTimes={availability[formattedDate] || []}
                therapyType={therapyType} // Pass therapyType to DayColumn
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Scheduler;

