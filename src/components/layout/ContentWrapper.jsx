import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function ContentWrapper() {
    return (
        <main className="flex-1 p-6" style={{
            marginLeft: "16rem", // Adjust this value to match the width of your sidebar
            padding: "20px" // Add padding to the right side of the content
          }}>
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold">1,245</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold">645</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold">$24,680</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-2xl font-bold">87%</span>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}