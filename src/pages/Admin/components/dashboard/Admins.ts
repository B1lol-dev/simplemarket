import axios from "axios";
import { AdminCard } from "../cards/AdminsCard";
import { API_URL } from "../../../../constants/constants";
import { v4 as uuidv4 } from "uuid";

export const Admins = (): string => {
  function updateAdmins() {
    axios.get(`${API_URL}/admins`).then((res) => {
      const { data: admins } = res;
      const admin_dashboard_admins_wrapper = document.getElementById(
        "admin_dashboard_admins_wrapper"
      );
      admin_dashboard_admins_wrapper!.innerHTML = "";

      admins.map((admin: object) => {
        admin_dashboard_admins_wrapper!.innerHTML += AdminCard(admin);
      });
    });
  }

  updateAdmins();

  document.addEventListener("DOMContentLoaded", () => {
    const admin_dashboard_add_admin_form = document.getElementById(
      "admin_dashboard_add_admin_form"
    ) as HTMLFormElement;
    const admin_dashboard_add_admin_btn = document.getElementById(
      "admin_dashboard_add_admin_btn"
    ) as HTMLButtonElement;

    admin_dashboard_add_admin_btn.addEventListener("click", () => {
      admin_dashboard_add_admin_form.classList.toggle("hidden");
    });

    admin_dashboard_add_admin_form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const usernameInp = admin_dashboard_add_admin_form
        .children[1] as HTMLInputElement;
      const passwordInp = admin_dashboard_add_admin_form
        .children[2] as HTMLInputElement;

      const newID = uuidv4();

      axios
        .post(`${API_URL}/admins`, {
          id: newID,
          username: usernameInp.value,
          password: passwordInp.value,
        })
        .then((res) => {
          usernameInp.value = "";
          passwordInp.value = "";
          admin_dashboard_add_admin_form.classList.toggle("hidden");
          console.log(res);
          updateAdmins();
        });
    });
  });

  return /*html*/ `
    <div class="w-full h-full relative bg-sm-white dark:bg-sm-black overflow-y-scroll">
        <div class="grid grid-cols-5 gap-6 p-8 justify-items-center overflow-x-hidden" id="admin_dashboard_admins_wrapper">
            
        </div>
        <button type="button" class="h-10 w-10 rounded-full text-white text-3xl p-5 bg-sm-purple flex items-center justify-center fixed bottom-5 right-5" id="admin_dashboard_add_admin_btn">+</button>
        <form class="flex flex-col fixed top-[50%] left-[50%] -translate-[50%] bg-white p-5 rounded-md shadow-lg gap-3 dark:bg-sm-black-light hidden" id="admin_dashboard_add_admin_form">
            <button class="ml-auto mb-auto dark:text-white" onclick="this.parentElement.classList.toggle('hidden')" type="button">x</button>
            <input type="text" placeholder="username" required class="px-3 py-1 border border-sm-gray rounded-md text-xl user-invalid:border-red-500 dark:text-white">
            <input type="text" placeholder="password" required class="px-3 py-1 border border-sm-gray rounded-md text-xl user-invalid:border-red-500 dark:text-white">
            <button type="submit" class="text-xl px-3 py-1 bg-sm-purple rounded-md text-white">Add</button>
        </form>
    </div>
    `;
};
