import { Outlet, RootRoute, Router, Route } from "@tanstack/react-router";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import LeaveType from "./pages/LeaveType";

const rootRoute = new RootRoute({
    component: () => <>
        {/* <h1>Hello World</h1> */}
        <Outlet />
    </>
})

const landingPageRoute = new Route({
    path: "/",
    getParentRoute: () => rootRoute,
    component: Home,
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
})

const routeTree = rootRoute.addChildren([landingPageRoute, loginPageroute, leaveTypePageroute]);

export const router = new Router({routeTree});