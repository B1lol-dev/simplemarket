import axios from "axios";

export const Admin = (): string => {
  axios.get("http://localhost:3000/admins").then((res) => {
    console.log(res.data);
  });

  return /*html*/ `
    <div>

    </div>
  `;
};
