const user = {
  id: 1,
  username: 'jimcostdev',
  name: 'Ronaldo Jimenez',
  password: 'ghdoefgiefdrtyuj',
  email: 'test@gmail.com'
}

console.log(user.email)

let jsonSerializado = JSON.stringify(user);
console.log(jsonSerializado)

let jsonReconstruido = JSON.parse(jsonSerializado);
console.log(jsonReconstruido.email)