import axios from "@/api/axios";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"


export default function AdminDashboard() {
    const { data: comments, isLoading, error } = useQuery({
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then(
                (res) => res.json()
            ),
        queryKey: ['comments'],
    });

    const { data: mpesaBalance, isLoadingMpesaBalance, errorMpesaBalance } = useQuery({
        queryFn: async () => {
            const token = localStorage.getItem('token'); // Retrieve token from storage
            if (!token) {
                throw new Error('Token not found'); // Handle case where token is not found
            }

            // Make GET request with token in headers
            const response = await axios.get('/dashboard/getMpesaBalance', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data.balance[0].org_account_balance;
        },
        queryKey: ['mpesaBalance']
    });

    const { data: smsBalance, isLoadingSmsBalance, errorSmsBalance } = useQuery({
        queryFn: async () => {
            const token = localStorage.getItem('token'); // Retrieve token from storage
            if (!token) {
                throw new Error('Token not found'); // Handle case where token is not found
            }

            // Make GET request with token in headers
            const response = await axios.get('/dashboard/getSmsBalance', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data.Data[-1].Credits;
        },
        queryKey: ['smsBalance']
    });

    // Show Loading message while data is fetching
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // To handle error
    if (error) {
        return <div className="error">Error: error fetching</div>
    }
    return (
        <>
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
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-white">Ksh {mpesaBalance}</h3>
                    </div>
                    <div>
                        <h5 className="text-1xl font-semibold text-gray-500 dark:text-white">SMS BALANCE</h5>
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-white">{ console.log(smsBalance) }</h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {comments.map((comment) => (
                    <Card className="bg-gradient-to-r from-teal-500 to-teal-300" key={comment.id}>
                        <CardHeader className="pb-2">
                            <CardTitle className=" text-gray-300 dark:text-gray-400">{comment.id}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-2xl font-bold text-gray-300 dark:text-gray-400">{comment.email}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}