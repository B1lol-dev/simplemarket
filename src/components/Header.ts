import { Container } from "./Container";

// assets
import logoImg from "../assets/logo.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/searchWhite.svg";

export const Header = () => {
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
    <header>
        ${Container(/*html*/ `
        <nav class="flex items-center justify-between">
            <a href="/" onclick="location.pathname = '/'">
                <img src=${logoImg} alt="logo" class="w-20 h-20">
            </a>
            <form id="nav_search" class="flex max-w-3xl w-full">
                <input type="text" placeholder="Search..." class="px-3 py-1 border border-sm-gray rounded-l-md w-full text-2xl">
                <button class="bg-sm-purple text-white p-1 px-2 text-2xl rounded-r-md">
                    <img src=${searchIcon} alt="Search">
                </button>
            </form>
            <ul class="flex gap-4 items-center">
                <li><a href="/login" class="flex items-center"><img src=${userIcon} alt="">Login</a></li>
                <li><a href="/cart" class="flex items-center"><img src=${cartIcon} alt="">Cart</a></li>
            </ul>
        </nav>
        `)} 
    </header>
    `;
};
