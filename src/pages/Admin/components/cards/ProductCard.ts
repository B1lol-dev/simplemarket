import axios from "axios";
import { API_URL } from "../../../../constants/constants";

declare global {
  interface Window {
    adminDeleteProduct: (...params: any) => void;
  }
}

export const ProductCard = (product: any): string => {
  console.log(location.origin + product?.url);

  window.adminDeleteProduct = (_this: any) => {
    const thisPrice = _this.previousElementSibling.previousElementSibling;
    const urlParts = thisPrice.href.split("/");
    const productId = urlParts[urlParts.length - 1];
    console.log(productId);

    axios
      .delete(`${API_URL}/products/${productId}`)
      .then((res) => {
        console.log(res);
        _this.parentElement?.parentElement?.parentElement?.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   href="${product?.url}" onclick="location.pathname = '${product?.url}'"

  return /*html */ `
    <div class="max-w-[300px] h-[530px] w-full! items-center bg-white p-8 rounded-md dark:bg-sm-black-light relative">
        <img src=${product?.image} alt="${
    product?.title
  }" class="min-w-[200px] max-h-[270px] h-full object-contain mb-10 block mx-auto bg-white rounded-[inherit] p-3">
        <h1 class="text-2xl text-left dark:text-white">${product?.title}</h1>
        <a href=${
          product?.url
        } class="before:content-[''] before:inset-0 before:absolute mt-2 dark:text-sm-gray-light">$${
    product?.price
  }</a>
        <div class="mt-3 flex w-full gap-1 flex-wrap min-h-10 overflow-y-scroll">
            ${
              product?.categories
                ? product?.categories
                    .map(
                      (category: string) =>
                        /*html*/ `<span class="bg-sm-gray-light text-white rounded-md px-2 py-1 text-sm">${category}</span>`
                    )
                    .join("")
                : ""
            }
        </div>
        <button type="button" class="bg-red-500 w-full mt-3 py-1 rounded-lg text-white relative" onclick="window.adminDeleteProduct(this)">Delete</button>
    </div>
    `;
};
