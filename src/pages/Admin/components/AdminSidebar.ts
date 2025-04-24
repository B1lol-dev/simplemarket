export const AdminSidebar = () => {
  return /*html*/ `
    <div class="w-[300px] h-screen bg-white py-5 flex flex-col gap-2 dark:bg-sm-black-light">
        <a href="/" onclick="location.pathname = '/'"><h1 class="text-center text-3xl font-semibold dark:text-white my-5">SimpleMarket</h1></a>
        <div class="w-full flex flex-col">
            <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray transition hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/users'">Users</button>
            <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray transition hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/products'">Products</button>
            <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray tranistion hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/admins'">Admins</button>
        </div>
    </div>
    `;
};
