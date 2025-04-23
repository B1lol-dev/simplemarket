import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home.ts";
import { Login } from "./pages/Auth/Login.ts";
import { Register } from "./pages/Auth/Register.ts";
import { NotFound } from "./pages/NotFound/NotFound.ts";

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
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
