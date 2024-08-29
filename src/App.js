import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Calculators from "./components/Caluculators";
import Channel from "./components/Channel";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import Integrations from "./components/Integrations";
import Inventory from "./components/Inventory";
import Order from "./components/Order";
import Reports from "./components/Reports";
import Returns from "./components/Returns";
import Shipping from "./components/Shipping";
import Layout from "./components/Layout";
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar-container">
          <Layout />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
