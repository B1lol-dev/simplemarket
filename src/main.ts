import "./style.css";
import { Router } from "./Router";

Router(document.getElementById("app")!);

// theme
if (localStorage.getItem("isDarkMode") === "true") {
  document.querySelector("html")!.classList.add("dark");
} else {
  document.querySelector("html")!.classList.remove("dark");
}
