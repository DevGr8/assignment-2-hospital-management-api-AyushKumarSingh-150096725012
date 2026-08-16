import React from "react";
import AddHospital from "./components/AddHospital";
import HospitalList from "./components/HospitalList";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header>
                <h1>Hospital Management System</h1>
                <p>Manage hospitals, beds and availability</p>
            </header>

            <main>
                <AddHospital />
                <HospitalList />
            </main>
        </div>
    );
}

export default App;
