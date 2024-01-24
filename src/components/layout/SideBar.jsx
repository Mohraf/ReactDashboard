import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function SideBar() {
  return (
    <>
      <aside className="w-64 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-700" style={{
        position: "fixed",
        overflowY: "scroll",
        top: 0,
        bottom: 0
      }}>
        <div className="h-16 flex items-center justify-center border-b-2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Admin Portal</h2>
        </div>
        <ul>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <TvIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <CarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Vehicles</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Leave</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <DocumentIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">LPO</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Out of Office</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Requisition</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Corporate Farms</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Ticket</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Product Registration</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Delivery</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Delivery Map</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Product Manufacture</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Greenlife Source</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Promotions</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Product Codes</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Promo Codes</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">TSA Targets</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Checkins</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Warehouse</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Corporate Checkins</span>
            </a>
          </li>
        </ul>
      </aside>
      
    </>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function TvIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        {/* TV screen */}
        <rect x="2" y="2" width="20" height="15" />

        {/* TV stand */}
        <polyline points="7 17 12 22 17 17" />
        </svg>
    );
}


function CarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Body of the car */}
        <rect x="2" y="10" width="20" height="8" rx="2" ry="2" />
  
        {/* Roof of the car */}
        <rect x="6" y="6" width="12" height="4" rx="1" ry="1" />
  
        {/* Front wheel */}
        <circle cx="7" cy="18" r="3" />
  
        {/* Back wheel */}
        <circle cx="17" cy="18" r="3" />
      </svg>
    );
}


function DocumentIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Document stack */}
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
  
        {/* Folded corner */}
        <path d="M14 2H20L10 12" />
      </svg>
    );
}  


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
