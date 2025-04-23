import "./style.css";
import { Router } from "./Router";
import { API_URL } from "./constants/constants";

Router(document.getElementById("app")!);

// theme
if (localStorage.getItem("isDarkMode") === "true") {
  document.querySelector("html")!.classList.add("dark");
} else {
  document.querySelector("html")!.classList.remove("dark");
}

console.log(API_URL);
