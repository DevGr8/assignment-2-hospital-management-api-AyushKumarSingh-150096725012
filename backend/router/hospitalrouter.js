const express = require("express");
const Hospital = require("../models/hospital");

const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const hospitals = await Hospital.find({});
        response.status(200).json(hospitals);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (request, response) => {
    try {
        const hospital = await Hospital.findById(request.params.id);

        if (!hospital) {
            return response.status(404).json({
                message: "Hospital not found"
            });
        }

        response.status(200).json(hospital);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.post("/", async (request, response) => {
    try {
        const newHospital = new Hospital({
            name: request.body.name,
            city: request.body.city,
            totalBeds: request.body.totalBeds,
            availableBeds: request.body.availableBeds
        });

        const hospital = await newHospital.save();

        response.status(201).json(hospital);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

router.put("/:id", async (request, response) => {
    try {
        const updatedHospital = await Hospital.findByIdAndUpdate(
            request.params.id,
            {
                name: request.body.name,
                city: request.body.city,
                totalBeds: request.body.totalBeds,
                availableBeds: request.body.availableBeds
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedHospital) {
            return response.status(404).json({
                message: "Hospital not found"
            });
        }

        response.status(200).json(updatedHospital);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const deletedHospital = await Hospital.findByIdAndDelete(
            request.params.id
        );

        if (!deletedHospital) {
            return response.status(404).json({
                message: "Hospital not found"
            });
        }

        response.status(200).json({
            message: "Hospital deleted successfully"
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

module.exports = router;
