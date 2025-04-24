import axios from "axios";
import { API_URL } from "../../../../constants/constants";

declare global {
  interface Window {
    adminDeleteAdmin: (...params: any) => void;
  }
}

export const AdminCard = (adminData: any): string => {
  window.adminDeleteAdmin = (_this: any, id: any) => {
    console.log(id);

    axios
      .delete(`${API_URL}/admins/${id}`)
      .then(() => {
        _this.parentElement?.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return /*html*/ `
      <div class="bg-white p-5 min-h-[300px] min-w-[250px] rounded-md flex flex-col items-center mt-8 dark:bg-sm-black-light">
          <div class="h-30 w-30 bg-orange-500 rounded-full text-white flex items-center justify-center text-4xl font-extrabold select-none mt-[-3rem] outline-[10px] outline-sm-white dark:outline-sm-black">${String(
            adminData.username
          )
            .substring(0, 1)
            .toUpperCase()}👑</div>
          <div class="mt-5">
              <h1 class="text-3xl dark:text-white text-center">${
                adminData.username
              }</h1>
              <h2 class="text-xl dark:text-white mt-3">Password: ${
                adminData.password
              }</h2>
          </div>
          <button class="w-full bg-red-500 text-white mt-auto p-1 rounded-md" onclick="window.adminDeleteAdmin(this, '${
            adminData.id
          }')">Delete</button>
      </div>
      `;
};
