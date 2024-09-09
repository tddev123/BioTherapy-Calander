import React, { useState } from "react";
import "./DayColumn.css";

import { useNavigate } from "react-router-dom";

interface DayColumnProps {
  date: string;
  day: string;
  appointments: Appointment[];
  onAdd: (appointment: Appointment) => void;
  onRemove: (id: number) => void;
  isCurrentMonth: boolean;
  availableTimes: string[];
  therapyType: string; // Add therapyType prop
}

const DayColumn: React.FC<DayColumnProps> = ({
  date,
  day,
  appointments,
  onRemove,
  isCurrentMonth,
  availableTimes,
  therapyType, // Destructure therapyType
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();

  // Generate times from 9 AM to 5 PM in 12-hour format
  const generateTimes = () => {
    const times: string[] = [];
    for (let hour = 9; hour <= 17; hour++) {
      const suffix = hour >= 12 ? "PM" : "AM";
      const adjustedHour = hour % 12 || 12; // Convert hour to 12-hour format
      const formattedTime = `${adjustedHour}:00 ${suffix}`;
      times.push(formattedTime);
    }
    return times;
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time); // Highlight selected time
  };

  const togglePopup = () => {
    if (availableTimes.length > 0) {
      setShowPopup(!showPopup);
    } else {
      alert("No available times on this date");
    }
  };

  const handleConfirm = () => {
    if (selectedTime) {
      navigate(
        `/confirmappointment?date=${encodeURIComponent(
          date
        )}&time=${encodeURIComponent(
          selectedTime
        )}&therapyType=${encodeURIComponent(therapyType)}`
      );
    }
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

  return (
    <div className={`day-column ${isCurrentMonth ? "" : "other-month"}`}>
      <div className="day-label">{day}</div>

      {isCurrentMonth && appointments.length === 0 && (
        <button
          onClick={togglePopup}
          className={`availability-button ${
            availableTimes.length > 0 ? "available" : "unavailable"
          }`}
        >
          {availableTimes.length > 0 ? "Available" : "Unavailable"}
        </button>
      )}

      {showPopup && (
        <>
          <div className="overlay" onClick={() => setShowPopup(false)}></div>
          <div className="popup">
            <div className="popup-header">
              <span className="popup-date">{incrementDay(date)}</span>
              <button
                onClick={() => setShowPopup(false)}
                className="close-popup"
              >
                X
              </button>
            </div>
            <div className="popup-content">
              {generateTimes().map((time) => (
                <div
                  key={time}
                  className={`time-option ${
                    time === selectedTime ? "selected" : ""
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </div>
              ))}
            </div>
            <button onClick={handleConfirm} className="confirm-button">
              Confirm
            </button>
          </div>
        </>
      )}

      {appointments.map((appt) => (
        <div key={appt.id} className="appointment">
          {appt.time} - {appt.title}
          <button onClick={() => onRemove(appt.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default DayColumn;
