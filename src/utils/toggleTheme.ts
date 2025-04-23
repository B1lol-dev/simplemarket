export const toggleTheme = () => {
  if (localStorage.getItem("isDarkMode") === "true") {
    document.querySelector("html")!.classList.remove("dark");
    localStorage.setItem("isDarkMode", "false");
  } else {
    document.querySelector("html")!.classList.add("dark");
    localStorage.setItem("isDarkMode", "true");
  }
};
