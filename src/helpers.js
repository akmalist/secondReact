function choice(item) {
  return Math.floor(Math.random() * item);
}

function remove(items, item) {
  let index = items.indexOf(item);
  while (index > -1) {
    items.splice(item, 1);
    index = items.indexOf(item);
  }
}

export { choice, remove };
