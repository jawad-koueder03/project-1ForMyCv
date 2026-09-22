import TrafficChatApp from "./TrafficChatApp";
import TrafficDashboard from "./TrafficDashboard";
import ReportsPage from "./ReportsPage";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route
          path="/traficChatApp"
          element={<TrafficChatApp></TrafficChatApp>}
        />
        <Route path="/TrafficDashboard" element={<TrafficDashboard></TrafficDashboard>} />
        <Route path="/ReportsPage" element={<ReportsPage></ReportsPage>} />
      </Routes>
      </main>
    </>
  );
}

export default App;
