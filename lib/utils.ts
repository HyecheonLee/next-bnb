export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    const itemString = cookieString?.split("/s*;s*/");
    console.log(itemString);
    itemString.forEach((pairs) => {
      const pair = pairs.split("=");
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }
  return cookies;
};
