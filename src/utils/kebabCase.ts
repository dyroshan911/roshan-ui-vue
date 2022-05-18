export const kebabCase = (str: string | null): string | null => {
  if (!str) return str;
  str = str.replace(/^[A-B]/, (i) => i.toLowerCase());
  str = str.replace(/[A-B]/g, (i) => '-' + i.toLowerCase());
  return str;
};
