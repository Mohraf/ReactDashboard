import { HomeIcon, TvIcon, CarIcon, DocumentIcon, SettingsIcon, ShoppingCartIcon, UsersIcon, FreightContainerIcon, LocationPinIcon, TractorIcon, TicketIcon,
BottleIcon } from "../icons/icons"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "../ui/dropdown-menu"


export default function SideBar() {
  return (
    <>
      <aside className="w-64 bg-gradient-to-b from-cyan-950 to-slate-700 dark:from-gray-800 dark:to-gray-700" style={{
        position: "fixed",
        overflowY: "scroll",
        top: 0,
        bottom: 0
      }}>
        <div className="h-16 flex items-center justify-center border-b-2">
          <h2 className="text-2xl font-semibold text-white dark:text-white">Admin Portal</h2>
        </div>
        <ul>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="/">
              <TvIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Dashboard</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <CarIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Vehicles</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <DropdownMenu>
              <DropdownMenuTrigger className="shadow-2xl shadow-slate-700 flex items-center space-x-4" asChild>
                <Button className="w-56 bg-gradient-to-b from-cyan-950 to-slate-700 dark:from-gray-800 dark:to-gray-700hover:bg-slate-700 dark:hover:bg-gray-700">                  
                  <HomeIcon className="h-5 w-5 text-white dark:text-gray-400" />
                  <span className="text-sm text-white font-medium">Leave</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gradient-to-b from-cyan-950 to-slate-700 dark:from-gray-800 dark:to-gray-700hover:bg-slate-700 dark:hover:bg-gray-700">
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/leave-type">
                    <span>Leave Type</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/leave-request">
                    <span>Leave Request</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/leave-approval">
                    <span>Leave Approval</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <DocumentIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">LPO</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <LocationPinIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Out of Office</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <DocumentIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Requisition</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <TractorIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Corporate Farms</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <TicketIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Ticket</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <BottleIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Product Registration</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Delivery</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Delivery Map</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Product Manufacture</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Greenlife Source</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Promotions</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Product Codes</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Promo Codes</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">TSA Targets</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Checkins</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <HomeIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Warehouse</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Corporate Checkins</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <FreightContainerIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Imports</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Account Opening</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Reports</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Finance Messages</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <DropdownMenu>
              <DropdownMenuTrigger className="shadow-2xl shadow-slate-700 flex items-center space-x-4" asChild>
                <Button className="w-56 bg-gradient-to-b from-cyan-950 to-slate-700 dark:from-gray-800 dark:to-gray-700hover:bg-slate-700 dark:hover:bg-gray-700">                  
                  <HomeIcon className="h-5 w-5 text-white dark:text-gray-400" />
                  <span className="text-sm text-white font-medium">Marketing</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gradient-to-b from-cyan-950 to-slate-700 dark:from-gray-800 dark:to-gray-700hover:bg-slate-700 dark:hover:bg-gray-700">
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/marketing-employees">
                    <span>Employees</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/marketing-clients">
                    <span>Clients</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/marketing-farmers">
                    <span>Farmers</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/marketing-distributors">
                    <span>Distributors</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-white dark:text-gray-400">
                  <a className="w-56 flex items-center space-x-4" href="/leave-approval">
                    <span>Stockists</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Chat</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Assets</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Mobile App</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Payments</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Products</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Stockists</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Inventory</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Location Settings</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <UsersIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Employees</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <UsersIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Clients</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">TSAs</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Soil</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Tasks</span>
            </a>
          </li>
          <li className="flex items-center p-6 hover:bg-slate-700 dark:hover:bg-gray-700">
            <a className="flex items-center space-x-4" href="#">
              <SettingsIcon className="h-5 w-5 text-white dark:text-gray-400" />
              <span className="text-sm text-white font-medium">Messages</span>
            </a>
          </li>
        </ul>
      </aside>      
    </>
  )
}
