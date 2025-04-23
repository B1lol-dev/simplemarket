import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home.ts";
import { Login } from "./pages/Auth/Login.ts";
import { Register } from "./pages/Auth/Register.ts";
import { NotFound } from "./pages/NotFound/NotFound.ts";
import { Admin } from "./pages/Admin/Admin.ts";
import { AdminLogin } from "./pages/Admin/AdminLogin.ts";

export const Router = (root: HTMLElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/login", () => {
      root.innerHTML = Login();
    })
    .get("/register", () => {
      root.innerHTML = Register();
    })
    .get("/admin", () => {
      root.innerHTML = Admin();
    })
    .get("/admin/login", () => {
      root.innerHTML = AdminLogin();
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
