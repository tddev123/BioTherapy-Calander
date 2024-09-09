// src/TimeSlot.tsx
import React from "react";
import "./TimeSlot.css";


interface TimeSlotProps {
  time: string;
  date: string;
  appointment?: Appointment;
  onAdd: (appointment: Appointment) => void;
  onRemove: (id: number) => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
  time,
  date,
  appointment,
  onAdd,
  onRemove,
}) => {
  const handleAdd = () => {
    const title = prompt("Enter appointment title:");
    if (title) {
      onAdd({ id: Date.now(), title, time, date });
    }
  };

  return (
    <div className="time-slot">
      {appointment ? (
        <div className="appointment">
          {appointment.title}
          <button onClick={() => onRemove(appointment.id)}>X</button>
        </div>
      ) : (
        <button onClick={handleAdd} className="add-button">
          +
        </button>
      )}
    </div>
  );
};

export default TimeSlot;
