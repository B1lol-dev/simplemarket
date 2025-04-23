import { Container } from "./Container";

// assets
import logoImg from "../assets/logo.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";

export const Header = () => {
  return /*html*/ `
    <header>
        ${Container(/*html*/ `
        <nav class="flex items-center justify-between">
            <a href="/" onclick="location.pathname = '/'">
                <img src=${logoImg} alt="logo" class="w-20 h-20">
            </a>
            <form id="nav_search" class="flex">
                <input type="text" placeholder="Search..." class="px-3 py-1 border border-sm-gray rounded-md text-2xl">
                <button class="bg-sm-purple text-white p-1 text-2xl rounded-md">Search</button>
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
