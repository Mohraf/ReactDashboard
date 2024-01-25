import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <Card className="bg-gradient-to-r from-red-500 to-red-300">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">Registered Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">1,245</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-teal-500 to-teal-300">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">Total Leaves</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">1675</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-orange-500 to-orange-300">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">Total Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">645</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-green-500 to-green-300">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">Total Visitors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">87</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-green-500 to-green-300 w-36 h-28">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">RSMs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">8</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-orange-500 to-orange-300 w-36 h-28">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">TSAs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">47</span>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-teal-500 to-teal-300 w-36">
                    <CardHeader className="pb-2">
                        <CardTitle className=" text-gray-300 dark:text-gray-400">Clients</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">4500</span>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}