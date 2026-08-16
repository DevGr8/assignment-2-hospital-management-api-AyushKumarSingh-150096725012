const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
export const getHospitals = async () => {
    const response = await fetch(`${API_URL}/hospitals`);

    if (!response.ok) {
        throw new Error("Failed to fetch hospitals");
    }
    return response.json();
};

export const addHospital = async (hospital) => {
    const response = await fetch(`${API_URL}/hospitals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(hospital)
    });

    if (!response.ok) {
        throw new Error("Failed to add hospital");
    }
    return response.json();
};

export const updateHospital = async (id, hospital) => {
    const response = await fetch(`${API_URL}/hospitals/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(hospital)
    });

    if (!response.ok) {
        throw new Error("Failed to update hospital");
    }
    return response.json();
};

export const deleteHospital = async (id) => {
    const response = await fetch(`${API_URL}/hospitals/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete hospital");
    }
    return response.json();
};
