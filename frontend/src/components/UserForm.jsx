import { useState } from "react";
import { createUser } from "../api/userApi";

function UserForm({ onUserCreated }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            age: Number(age)
        };

        try {
            await createUser(userData);

            setName("");
            setAge("");

            onUserCreated();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-5 shadow-sm"
        >
            <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-24 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-2 font-medium text-white hover:bg-gray-800"
                >
                    Add
                </button>

            </div>
        </form>
    );
}

export default UserForm;