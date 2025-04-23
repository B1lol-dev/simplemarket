import { Products } from "./dashboard/Products";
import { Users } from "./dashboard/Users";

export const AdminDashboard = (tab: string): string => {
  // handling tabs
  switch (tab) {
    case "users":
      return Users();
    case "products":
      return Products();
    default:
      return "";
  }
};
