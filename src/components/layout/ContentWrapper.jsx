import { useQuery } from "@tanstack/react-query"
import AdminDashboard from "../dashboard/AdminDashboard"


export default function ContentWrapper({children}) {
    // const { data: balance, isLoading, error } = useQuery({
    //     queryFn: () =>
    //         fetch('http://localhost:8000/mobileapp/dashboard/getMpesaBalance').then(
    //             (res) => res.json()
    //         ),
    //     queryKey: ['balance'],
    // });

    // // Show Loading message while data is fetching
    // if (isLoading) {
    //     return <h2>Loading...</h2>
    // }

    // // To handle error
    // if (error) {
    //     return <div className="error">Error: error fetching</div>
    // }

    return (
        <main className="flex-1 p-6" style={{
            marginLeft: "16rem", // Adjust this value to match the width of your sidebar
            padding: "20px", // Add padding to the right side of the content
            overflowY: "scroll"
          }}>
            <div className="h-11 flex justify-end border-b-2 border-dotted border-slate-800">
                <h2 className="text-2xl font-semibold text-black dark:text-white">User</h2>
            </div>
            
            {children}
        </main>
    )
}