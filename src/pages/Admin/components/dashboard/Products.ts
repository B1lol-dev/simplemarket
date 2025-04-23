import axios from "axios";
import { ProductCard } from "../../../../components/Cards/ProductCard";
import { API_URL } from "../../../../constants/constants";
import { v4 as uuidv4 } from "uuid";

export const Products = (): string => {
  function updateProducts() {
    axios.get(`${API_URL}/products`).then((res) => {
      const { data: users } = res;
      const admin_dashboard_products_wrapper = document.getElementById(
        "admin_dashboard_products_wrapper"
      );
      admin_dashboard_products_wrapper!.innerHTML = "";

      users.map((user: object) => {
        admin_dashboard_products_wrapper!.innerHTML += ProductCard(user);
      });
    });
  }

  updateProducts();

  document.addEventListener("DOMContentLoaded", () => {
    const admin_dashboard_add_product_form = document.getElementById(
      "admin_dashboard_add_product_form"
    ) as HTMLFormElement;
    const admin_dashboard_add_product_btn = document.getElementById(
      "admin_dashboard_add_product_btn"
    ) as HTMLButtonElement;

    admin_dashboard_add_product_btn.addEventListener("click", () => {
      admin_dashboard_add_product_form.classList.toggle("hidden");
    });

    admin_dashboard_add_product_form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const imageInp = admin_dashboard_add_product_form
        .children[1] as HTMLInputElement;
      const titleInp = admin_dashboard_add_product_form
        .children[2] as HTMLInputElement;
      const priceInp = admin_dashboard_add_product_form
        .children[3] as HTMLInputElement;

      const newID = uuidv4();

      console.log(imageInp.value);

      axios
        .post(`${API_URL}/products`, {
          id: newID,
          title: titleInp.value,
          price: priceInp.value,
          image: imageInp.value,
          url: `/product/${newID}`,
        })
        .then((res) => {
          imageInp.value = "";
          titleInp.value = "";
          priceInp.value = "";
          console.log(res);
          updateProducts();
        });
    });
  });

  return /*html*/ `
    <div class="w-full h-full relative bg-sm-white dark:bg-sm-black">
        <div class="grid grid-cols-5 gap-6 p-8 justify-items-center" id="admin_dashboard_products_wrapper">
            
        </div>
        <button type="button" class="h-10 w-10 rounded-full text-white text-3xl p-5 bg-sm-purple flex items-center justify-center fixed bottom-5 right-5" id="admin_dashboard_add_product_btn">+</button>
        <form class="flex flex-col fixed top-[50%] left-[50%] -translate-[50%] bg-white p-5 rounded-md shadow-lg gap-3 dark:bg-sm-black-light hidden" id="admin_dashboard_add_product_form">
            <button class="ml-auto mb-auto dark:text-white" onclick="this.parentElement.classList.toggle('hidden')" type="button">x</button>
            <input type="text" placeholder="image url" class="px-3 py-1 border border-sm-gray rounded-md text-xl user-invalid:border-red-500 dark:text-white">
            <input type="text" placeholder="title" required class="px-3 py-1 border border-sm-gray rounded-md text-xl user-invalid:border-red-500 dark:text-white">
            <input type="number" placeholder="price" required class="px-3 py-1 border border-sm-gray rounded-md text-xl user-invalid:border-red-500 dark:text-white">
            <button type="submit" class="text-xl px-3 py-1 bg-sm-purple rounded-md text-white">Add</button>
        </form>
    </div>
    `;
};
