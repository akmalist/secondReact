function choice(item) {
  return item[Math.floor(Math.random() * item.length)];
}


function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}
 


export { choice, remove };
