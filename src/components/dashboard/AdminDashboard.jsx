import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function AdminDashboard() {
    return (
        <>
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
        </>
    )
}