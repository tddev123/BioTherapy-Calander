import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage"; // Import Homepage component
import Scheduler from "./Components/Scheduler";
import ConfirmAppointment from "./Components/ConfirmAppointment"; // Import ConfirmAppointment component
import "./App.css";
import StemCellTherapyPage from "./Components/StemCellTherapyPage";
import TherapyPrices from "./Components/TherapyPrices";
import Doctors from "./Components/Doctors";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/confirmappointment" element={<ConfirmAppointment />} />
          <Route path="/Stemcelltherapies" element={<StemCellTherapyPage />} />
          <Route path="/TherapyPrices" element={<TherapyPrices />} />
          <Route path="/Doctors" element={<Doctors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
