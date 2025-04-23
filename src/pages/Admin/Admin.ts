import axios from "axios";
import { API_URL } from "../../constants/constants";
import { AdminSidebar } from "./components/AdminSidebar";

export const Admin = (): string => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) {
    location.pathname = "/admin/login";
    return "";
  }

  axios.get(`${API_URL}/admins?id=${JSON.parse(adminToken)}`).then((res) => {
    if (res.data.length <= 0) {
      localStorage.removeItem("adminToken");
      location.pathname = "/admin/login";
    }
  });

  return /*html*/ `
    <div>
        ${AdminSidebar()}
    </div>
  `;
};
