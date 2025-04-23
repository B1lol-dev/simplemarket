type IContainer = string;

export const Container = (children: IContainer) => {
  return /*html */ `
    <div class="container mx-auto px-8 max-w-[1800px] w-full">
      ${children}
    </div>
    `;
};
