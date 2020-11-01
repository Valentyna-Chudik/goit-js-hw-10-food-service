import menuItemsTpl from "../templates/menu-items.hbs";
import menuItems from "../menu.json";

const menuContainer = document.querySelector('.js-menu');
// 1st Method
const menuItemsMarkup = menuItemsTpl(menuItems);
menuContainer.insertAdjacentHTML('beforeend', menuItemsMarkup);

// 2nd Method
// const menuItemsMarkup = createMenuItemsMarkup(menuItems);
// function createMenuItemsMarkup(menuItems) {
//   // return menuItems.map(menu-item=>menuItemTpl(menu-item)).join('');
//   // return menuItems.map(menuItemTpl).join('');
//   return menuItemsTpl(menuItems);
// };