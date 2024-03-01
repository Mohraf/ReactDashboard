import { Outlet, RootRoute, Router, Route, redirect } from "@tanstack/react-router";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import LeaveType from "./pages/LeaveType";
import LeaveRequest from "./pages/LeaveRequest";

import {jwtDecode} from 'jwt-decode';
import LeaveApproval from "./pages/LeaveApproval";

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

const routeTree = rootRoute
                .addChildren(
                    [
                        landingPageRoute, 
                        loginPageroute, 
                        leaveTypePageroute, 
                        leaveRequestPageRoute
                    ]
                );

export const router = new Router({routeTree});