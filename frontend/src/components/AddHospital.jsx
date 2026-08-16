import React, { useState } from "react";
import { addHospital } from "../api";

function AddHospital() {
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        totalBeds: "",
        availableBeds: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addHospital({
                name: formData.name,
                city: formData.city,
                totalBeds: Number(formData.totalBeds),
                availableBeds: Number(formData.availableBeds)
            });

            setMessage("Hospital added successfully!");

            setFormData({
                name: "",
                city: "",
                totalBeds: "",
                availableBeds: ""
            });

            window.dispatchEvent(new Event("hospitalAdded"));
        } catch (error) {
            setMessage("Error adding hospital");
        }
    };

    return (
        <div className="form-container">
            <h2>Add Hospital</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Hospital Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="totalBeds"
                    placeholder="Total Beds"
                    value={formData.totalBeds}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <input
                    type="number"
                    name="availableBeds"
                    placeholder="Available Beds"
                    value={formData.availableBeds}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <button type="submit">Add Hospital</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default AddHospital;
