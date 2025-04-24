import axios from "axios";
import { API_URL } from "../../constants/constants";

export const AdminLogin = (): string => {
  if (localStorage.getItem("adminToken")) {
    location.pathname = "/admin";
    return "";
  }

  window.addEventListener("load", () => {
    const form = document.getElementById("admin_login_form") as HTMLFormElement;

    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const usernameInp = form.children[0] as HTMLInputElement;
      const passwordInp = form.children[1] as HTMLInputElement;

      if (!usernameInp.value || !passwordInp.value) {
        return null;
      }

      axios
        .get(
          `${API_URL}/admins?username=${usernameInp.value}&password=${passwordInp.value}`
        )
        .then((res) => {
          if (res.data.length === 0) {
            return null;
          }

          localStorage.setItem("adminToken", JSON.stringify(res.data[0]?.id));
          location.pathname = "/admin";
        });
    });
  });

  return /*html*/ `
    <div class="h-screen w-screen flex items-center justify-center bg-sm-white dark:bg-sm-black">
        <button onclick="history.back()" class="fixed top-3 left-3 bg-sm-purple w-10 h-10 rounded-md text-white"><-</button>
        <form class="flex flex-col gap-4 bg-white p-10 rounded-md shadow-md dark:bg-sm-black-light max-lg:p-6" id="admin_login_form">
            <input type="text" placeholder="username" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white max-lg:text-xl" required>
            <input type="password" placeholder="password" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white max-lg:text-xl" required>
            <button class="bg-sm-purple text-white p-1 text-2xl rounded-md max-lg:text-xl">Login</button>
        </form>
    </div>
    `;
};
