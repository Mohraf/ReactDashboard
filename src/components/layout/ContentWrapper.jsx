import AdminDashboard from "../dashboard/AdminDashboard"

export default function ContentWrapper() {
    return (
        <main className="flex-1 p-6" style={{
            marginLeft: "16rem", // Adjust this value to match the width of your sidebar
            padding: "20px", // Add padding to the right side of the content
            overflowY: "scroll"
          }}>
            <div className="h-11 flex justify-end border-b-2 border-dotted border-slate-800">
                <h2 className="text-2xl font-semibold text-black dark:text-white">User</h2>
            </div>
            <div className="flex mt-4 justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
                    <h5 className="text-1xl font-semibold text-gray-500 dark:text-white">Welcome back Admin</h5>
                </div>
                <div className="flex gap-7" style={{
                    alignItems: "flex-end",
                    alignContent: "flex-end"
                }}>
                    <div>
                        <h5 className="text-1xl font-semibold text-gray-500 dark:text-white">MPESA BALANCE</h5>
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-white">Ksh</h3>
                    </div>
                    <div>
                        <h5 className="text-1xl font-semibold text-gray-500 dark:text-white">SMS BALANCE</h5>
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-white">0</h3>
                    </div>
                </div>
            </div>
            <AdminDashboard />
        </main>
    )
}