export const Register = (): string => {
  if (localStorage.getItem("token")) {
    location.pathname = "/";
    return "";
  }

  return /*html*/ `
    <div class="h-screen w-screen flex items-center justify-center bg-sm-white dark:bg-sm-black">
        <button onclick="history.back()" class="fixed top-3 left-3 bg-sm-purple w-10 h-10 rounded-md text-white"><-</button>
        <form class="flex flex-col gap-4 bg-white p-10 rounded-md shadow-md dark:bg-sm-black-light">
            <input type="text" placeholder="username" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <input type="password" placeholder="password" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <input type="password" placeholder="retype password" class="px-3 py-1 border border-sm-gray rounded-md text-2xl user-invalid:border-red-500 dark:text-white" required>
            <button class="bg-sm-purple text-white p-1 text-2xl rounded-md">Register</button>
            <a href="/login" class="text-sm-aqua" onclick="location.pathname = '/login'">Already have an account?</a>
        </form>
    </div>
    `;
};
