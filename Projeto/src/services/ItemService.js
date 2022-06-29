//ItemService.js
import { db } from "../config/db";
export const addItem = (item) => {
  db.ref("/items").push({
    name: item,
  });
};
export const deleteItem = (items) => {
  db.ref("/items").remove();
  ({
    name: items,
  });
};
