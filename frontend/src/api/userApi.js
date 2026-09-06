const API_URL = "/api/users";

export const createUser = async (userData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    return response.json();
};

export const getUsers = async () => {
    const response = await fetch(API_URL);

    return response.json();
};