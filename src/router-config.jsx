import { Outlet, RootRoute, Router, Route, redirect } from "@tanstack/react-router";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import LeaveType from "./pages/LeaveType";
import LeaveRequest from "./pages/LeaveRequest";
import LeaveApproval from "./pages/LeaveApproval";

import {jwtDecode} from 'jwt-decode';
import Employees from "./pages/marketing/Employees";
import Clients from "./pages/marketing/Clients";
import Farmers from "./pages/marketing/Farmers";
import Distributors from "./pages/marketing/Distributors";
import Stockists from "./pages/marketing/Stockists";

const rootRoute = new RootRoute({
    component: () => <>
        <Outlet />
    </>
})

const checkTokenExpiry = () => {
    const token = localStorage.getItem('token');
    if(token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            // Token has expired
            return true;
        }
    }

    return false;
};

const landingPageRoute = new Route({
    path: "/",
    getParentRoute: () => rootRoute,
    component: Home,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const loginPageroute = new Route({
    path: "/login",
    getParentRoute: () => rootRoute,
    component: Login,
})

const leaveTypePageroute = new Route({
    path: "/leave-type",
    getParentRoute: () => rootRoute,
    component: LeaveType,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const leaveRequestPageRoute = new Route({
    path: "/leave-request",
    getParentRoute: () => rootRoute,
    component: LeaveRequest,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const leaveApprovalPageRoute = new Route({
    path: "/leave-approval",
    getParentRoute: () => rootRoute,
    component: LeaveApproval,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const marketingEmployeesPageRoute = new Route({
    path: "/marketing-employees",
    getParentRoute: () => rootRoute,
    component: Employees,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const marketingClientsPageRoute = new Route({
    path: "/marketing-clients",
    getParentRoute: () => rootRoute,
    component: Clients,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const marketingFarmersPageRoute = new Route({
    path: "/marketing-farmers",
    getParentRoute: () => rootRoute,
    component: Farmers,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const marketingDistributorsPageRoute = new Route({
    path: "/marketing-distributors",
    getParentRoute: () => rootRoute,
    component: Distributors,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const marketingStockistsPageRoute = new Route({
    path: "/marketing-stockists",
    getParentRoute: () => rootRoute,
    component: Stockists,
    beforeLoad: async ({location}) => {
        if(checkTokenExpiry()) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                }
            })
        }
    },
})

const routeTree = rootRoute
                .addChildren(
                    [
                        landingPageRoute, 
                        loginPageroute, 
                        leaveTypePageroute, 
                        leaveRequestPageRoute,
                        leaveApprovalPageRoute,
                        marketingEmployeesPageRoute,
                        marketingClientsPageRoute,
                        marketingFarmersPageRoute,
                        marketingDistributorsPageRoute,
                        marketingStockistsPageRoute
                    ]
                );

export const router = new Router({routeTree});