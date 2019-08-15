function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mather: woman
  }
}
let family = marry({
  name: 'John'
}, {
  name: 'Ann'
})