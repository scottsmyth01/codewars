/*
Task:
Write a function generateMenu() with the following inputs/output:

Inputs:
menuItems: An array of objects (with url and text properties), which represents our menu items

Output:
A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)
*/

function generateMenu(menuItems) {
  let res = '';
  const html = menuItems.map((item) => {
    res += `<a href="${item.url}">${item.text}</a>`;
  });
  if (html.length === 0) return '';
  return res;
}
