export const AdminSidebar = () => {
  return /*html*/ `
    <div class="w-[300px] h-screen bg-white py-5 flex flex-col gap-2 dark:bg-sm-black-light" style="transition: .2s;">
        <button class="text-left ml-5 w-7 h-7 bg-sm-purple flex justify-center items-center text-white text-xl p-4 rounded-md" onclick="this.parentElement.classList.toggle('w-[75px]!'); this.nextElementSibling.classList.toggle('hidden')">☰</button>
        <div>
            <a href="/" onclick="location.pathname = '/'"><h1 class="text-center text-3xl font-semibold dark:text-white my-5">SimpleMarket</h1></a>
            <div class="w-full flex flex-col">
                <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray transition hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/users'">Users</button>
                <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray transition hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/products'">Products</button>
                <button type="button" class="w-full bg-gray text-start py-3 px-5 bg-sm-gray tranistion hover:bg-sm-gray-light text-white" onclick="location.pathname='/admin/dashboard/admins'">Admins</button>
            </div>
        </div>
    </div>
    `;
};
