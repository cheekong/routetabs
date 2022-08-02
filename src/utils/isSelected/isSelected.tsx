export const isSelected = (pathname: string, tabName: string) =>
  pathname.split("/").includes(tabName);
