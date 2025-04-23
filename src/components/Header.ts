import { Container } from "./Container";

// assets
import logoImg from "../assets/logo.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";

export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")!) || {};

  window.addEventListener("load", () => {
    const searchForm = document.getElementById("nav_search") as HTMLFormElement;
    const searchInput = searchForm.children[0] as HTMLInputElement;

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
                <h1 class="text-3xl dark:text-white">SimpleMarket</h1>
            </a>
            <form id="nav_search" class="flex max-w-3xl w-full">
                <input type="text" placeholder="Search..." class="px-3 py-1 border border-sm-gray rounded-l-md w-full text-2xl dark:text-white">
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
                    : /*html*/ `<a href="/login" onclick="location.pathname='/login'" class="flex items-center"><img src=${userIcon} alt="" class="dark:invert-100">Login</a>`
                }</li>
                <li><a href="/cart" onclick="location.pathname='/cart'" class="flex items-center"><img src=${cartIcon} alt="" class="dark:invert-100">Cart</a></li>
            </ul>
        </nav>
        `)} 
    </header>
    `;
};
