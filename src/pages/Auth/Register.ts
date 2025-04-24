import axios from "axios";
import { API_URL } from "../../constants/constants";
import { v4 as uuidv4 } from "uuid";

export const Register = (): string => {
  if (JSON.parse(localStorage.getItem("user")!)?.token) {
    location.pathname = "/";
    return "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register_form") as HTMLFormElement;

    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const usernameInp = form.children[0] as HTMLInputElement;
      const passwordInp = form.children[1] as HTMLInputElement;
      const password2Inp = form.children[2] as HTMLInputElement;

      if (!usernameInp.value || !passwordInp.value) {
        return null;
      }

      if (passwordInp.value !== password2Inp.value) {
        return null;
      }

      const userID = uuidv4();

      axios
        .post(`${API_URL}/users`, {
          id: userID,
          username: usernameInp.value,
          password: passwordInp.value,
          cart: [],
        })
        .then(() => {
          localStorage.setItem(
            "user",
            JSON.stringify({ username: usernameInp.value, token: userID })
          );
          usernameInp.value = "";
          passwordInp.value = "";
          password2Inp.value = "";
          location.pathname = "/";
        });
    });
  });

  return /*html*/ `
    <div class="h-screen w-screen flex items-center justify-center bg-sm-white dark:bg-sm-black">
        <button onclick="history.back()" class="fixed top-3 left-3 bg-sm-purple w-10 h-10 rounded-md text-white"><-</button>
        <form class="flex flex-col gap-4 bg-white p-10 rounded-md shadow-md dark:bg-sm-black-light" id="register_form">
            <input type="text" placeholder="username" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <input type="password" placeholder="password" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <input type="password" placeholder="retype password" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <button class="bg-sm-purple text-white p-1 text-2xl rounded-md">Register</button>
            <a href="/login" class="text-sm-aqua" onclick="location.pathname = '/login'">Already have an account?</a>
        </form>
    </div>
    `;
};
