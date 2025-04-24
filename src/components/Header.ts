import { Container } from "./Container";

// assets
import logoImg from "../assets/logo.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";
import { toggleTheme } from "../utils/toggleTheme";

export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")!) || {};

  window.addEventListener("load", () => {
    const searchForm = document.getElementById("nav_search") as HTMLFormElement;
    const searchInput = searchForm.children[0] as HTMLInputElement;
    const nav_theme_toggle = document.getElementById(
      "nav_theme_toggle"
    ) as HTMLButtonElement;

    nav_theme_toggle.addEventListener("click", () => {
      toggleTheme();
      nav_theme_toggle.innerText =
        localStorage.getItem("isDarkMode") === "true" ? "🌙" : "☀️";
    });

    searchForm.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      if (!searchInput.value) return null;
      location.pathname = `/search?query=${searchInput.value}`;
    });
  });

  return /*html*/ `
    <header class="fixed w-full py-4 bg-sm-white dark:bg-sm-black">
        ${Container(/*html*/ `
        <nav class="flex items-center justify-between">
            <a href="/" onclick="location.pathname = '/'">
                <!-- <img src=${logoImg} alt="logo" class="w-20 h-20"> -->
                <h1 class="text-3xl dark:text-white"><span class="max-md:hidden">SimpleMarket</span><span class="hidden max-md:block">SM</span></h1>
            </a>
            <form id="nav_search" class="flex max-w-3xl w-full max-xl:max-w-xl max-lg:max-w-md max-lg:mx-3">
                <input type="text" placeholder="Search..." class="px-3 py-1 border border-sm-gray rounded-l-md w-full text-2xl dark:text-white max-md:text-xl">
                <button class="bg-sm-purple text-white p-1 px-2 text-2xl rounded-r-md">
                    <img src=${searchIcon} alt="Search" class="invert-100">
                </button>
            </form>
            <ul class="flex gap-4 items-center dark:text-white">
                <li>${
                  user.token
                    ? /*html*/ `
                    <a href="/profile" onclick="location.pathname = '/profile'"><div class="h-4 w-4 bg-sm-purple text-white flex items-center justify-center p-5 text-xl rounded-full">${user?.username
                      .substring(0, 1)
                      .toUpperCase()}</div></a>`
                    : /*html*/ `<a href="/login" onclick="location.pathname='/login'" class="flex items-center h-6 min-w-6"><img src=${userIcon} alt="" class="dark:invert-100"><span class="max-lg:hidden">Login</span></a>`
                }</li>
                <li><a href="/cart" onclick="location.pathname='/cart'" class="flex items-center h-6 min-w-6"><img src=${cartIcon} alt="" class="dark:invert-100"><span class="max-lg:hidden">Cart</span></a></li>
                <button id="nav_theme_toggle" class="p-2 bg-white h-10 w-10 rounded-lg dark:bg-sm-black-light">${
                  localStorage.getItem("isDarkMode") === "true" ? "🌙" : "☀️"
                }</button>
            </ul>
        </nav>
        `)} 
    </header>
    `;
};
