export const UserCard = (userData: any): string => {
  return /*html*/ `
    <div class="bg-white p-5 min-h-[300px] min-w-[250px] rounded-md flex flex-col items-center mt-8 dark:bg-sm-black-light">
        <div class="h-30 w-30 bg-orange-500 rounded-full text-white flex items-center justify-center text-4xl font-extrabold select-none mt-[-3rem] outline-[10px] outline-sm-white dark:outline-sm-black">${String(
          userData.username
        )
          .substring(0, 1)
          .toUpperCase()}</div>
        <div class="mt-5">
            <h1 class="text-xl dark:text-white">Username: ${
              userData.username
            }</h1>
            <h2 class="text-xl dark:text-white">Password: ${
              userData.password
            }</h2>
        </div>
        <h3 class="text-lg mt-3 dark:text-white">👜Cart: </h3>
        <div>
            ${userData.cart
              .map((product: number) => {
                return /*html*/ `<a href="/products/${product}" onclick="location.path = '/products/${product}'" class="text-md hover:text-sm-aqua dark:text-white">Id: ${product}${
                  product === userData.cart[userData.cart.length - 1]
                    ? ""
                    : ", "
                }</a>`;
              })
              .join("")}
        </div>
    </div>
    `;
};
