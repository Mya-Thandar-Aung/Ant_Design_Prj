import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Services from "./pages/Services";
import Salons from "./pages/Salons";
import Customers from "./pages/Customers";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Category />} />
          <Route path="/services" element={<Services />} />
          <Route path="/salons" element={<Salons />} />
          <Route path="/salons" element={<Salons />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
