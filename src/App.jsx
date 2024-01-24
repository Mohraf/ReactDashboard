import { Button } from "./components/ui/button"
import { CarouselDemo } from "./components/demo/CarouselDemo"
import SideBar from "./components/layout/SideBar"
import ContentWrapper from "./components/layout/ContentWrapper"

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
        <SideBar></SideBar>
        <ContentWrapper></ContentWrapper>
      </div>
    </>
  )
}

export default App
