import { Button } from "./components/ui/button"
import { CarouselDemo } from "./components/demo/CarouselDemo"
import SideBar from "./components/layout/SideBar"
import ContentWrapper from "./components/layout/ContentWrapper"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router-config"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {

  return (    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>    
  )
}

export default App
