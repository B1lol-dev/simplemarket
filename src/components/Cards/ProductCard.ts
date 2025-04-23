export const ProductCard = (product: any): string => {
  console.log(location.origin + product?.url);

  return /*html */ `
    <a onclick="location.pathname = '${product?.url}'">
        <div class="max-w-[300px] w-full! items-center bg-white p-8 rounded-md dark:bg-sm-black-light">
            <img src=${product?.image} alt="${
    product?.title
  }" class="min-w-[200px] min-h-[270px] object-contain mb-10 block mx-auto bg-white rounded-[inherit] p-3">
            <h1 class="text-2xl text-left dark:text-white">${
              product?.title
            }</h1>
            <p class="mt-2 dark:text-sm-gray-light">$${product?.price}</p>
            <div class="mt-3 flex w-full gap-1 flex-wrap">
                ${product?.categories
                  .map(
                    (category: string) =>
                      /*html*/ `<span class="bg-sm-gray-light text-white rounded-md px-2 py-1 text-sm">${category}</span>`
                  )
                  .join("")}
            </div>
        </div>
    </a>
  `;
};
