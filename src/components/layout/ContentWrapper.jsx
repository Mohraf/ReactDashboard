import { useQuery } from "@tanstack/react-query"
import AdminDashboard from "../dashboard/AdminDashboard"
import { Toaster } from "../ui/toaster"


export default function ContentWrapper({children}) {
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
            <Toaster />
        </main>
    )
}