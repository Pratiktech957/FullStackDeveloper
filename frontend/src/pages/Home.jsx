import { useState, useEffect } from "react";

import UserForm from "../components/UserForm";
import UserCard from "../components/UserCard";

import { getUsers } from "../api/userApi";

function Home() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="mx-auto max-w-xl px-4">

                <h1 className="mb-6 text-3xl font-bold text-gray-900">
                    User Management
                </h1>

                <UserForm onUserCreated={fetchUsers} />

                <div className="mt-6 space-y-3">
                    {users.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Home;