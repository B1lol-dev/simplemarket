export const NotFound = (): string => {
  return /*html*/ `
    <div class="bg-sm-white flex flex-col items-center justify-center h-screen w-screen dark:bg-sm-black">
        <h1 class="text-7xl font-bold dark:text-white">404</h1>
        <p class="text-xl text-sm-gray mt-2 dark:text-sm-gray-light">The page you looking for is not exist</p>
        <button type="button" class="bg-sm-purple text-white p-2 mt-3 rounded-md" onclick="location.pathname = '/'">Go to home page</button>
    </div>
  `;
};
