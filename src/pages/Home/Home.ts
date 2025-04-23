import axios from "axios";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/Cards/ProductCard";
import { API_URL } from "../../constants/constants";

export const Home = (): string => {
  axios.get(`${API_URL}/products`).then((res) => {
    let products: Array<any> = res.data;
    const home_products_wrapper = document.getElementById(
      "home_products_wrapper"
    )!;
    home_products_wrapper.innerHTML = products
      .map((product) => {
        return ProductCard(product);
      })
      .join("");
  });

  return /*html*/ `
    <div class="bg-sm-white min-h-screen dark:bg-sm-black">
        ${Header()}
        <main>
          <section class="pt-32">
            ${Container(/*html*/ `
                <div id="home_products_wrapper" class="grid grid-cols-6 justify-items-center gap-10">
                  
                </div>
            `)}
          </section>
        </main>
    </div>
  `;
};
