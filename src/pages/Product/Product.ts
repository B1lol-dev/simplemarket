import axios from "axios";
import { Header } from "../../components/Header";
import { API_URL } from "../../constants/constants";
import { Container } from "../../components/Container";

export const Product = (id: string): string => {
  axios.get(`${API_URL}/products/${id}`).then((res) => {
    const { data: productData } = res;
    console.log(productData);
    const product_section = document.getElementById(
      "product_section"
    ) as HTMLSelectElement;
    const product_img = product_section.querySelector(
      "div:first-child img"
    ) as HTMLImageElement;

    const product_title = product_section.querySelector(
      "div:nth-child(2) h1"
    ) as HTMLHeadingElement;
    const product_price = product_section.querySelector(
      "div:nth-child(2) h2"
    ) as HTMLHeadingElement;

    product_img.src = productData.image;
    product_img.alt = productData.title;

    product_title.innerText = productData.title;
    product_price.innerText = "$" + productData.price;
  });

  return /*html*/ `
    <div class="bg-sm-white min-h-screen dark:bg-sm-black">
        ${Header()}
        <main>
            <section class="pt-32">
                ${Container(/*html*/ `
                <div id="product_section" class="flex items-center justify-center gap-30">
                    <div class="max-w-[700px] p-30 bg-white rounded-xl w-full h-[800px] flex">
                        <img src="" alt="Loading" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h1 class="text-6xl font-medium dark:text-white"></h1>
                        <h2 class="text-sm-gray-light text-4xl mt-4"></h2>
                        <p class="max-w-[400px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora corrupti consectetur, et illum animi a autem repellat repudiandae</p>
                        <button type="button" class="bg-sm-purple text-white p-3 rounded-xl mt-5 text-xl tranistion duration-200 hover:opacity-90">Add to cart</button>
                        <div>
                        
                        </div>
                    </div>
                </div>
            `)}
            </section>
        </main>
    </div>
  `;
};
