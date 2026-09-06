function UserCard({ user }) {
    return (
        <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
            <div>
                <h2 className="font-semibold text-gray-900">
                    {user.name}
                </h2>

                <p className="text-sm text-gray-500">
                    Age: {user.age}
                </p>
            </div>
        </div>
    );
}

export default UserCard;