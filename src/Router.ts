import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home.ts";

export const Router = (root: HTMLElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .run();
};
