let grid = [0, 0, 0, 0, 0, 0, 0];
let location1 = Math.floor(Math.random() * grid.length);
let location2 = Math.floor(Math.random() * grid.length);
let location3 = Math.floor(Math.random() * grid.length);
let userTries = 0;
let destroyedBattleship = 0;

if (location2 == location1) {
  location2 = Math.floor(Math.random() * grid.length);
}

if (location3 == location1) {
  location3 = Math.floor(Math.random() * grid.length);
}

if (location3 == location2) {
  location3 = Math.floor(Math.random() * grid.length);
}

console.log("Ubicaciones de los acorazados");
console.log(location1, location2, location3);

grid[location1] = 1;
grid[location2] = 1;
grid[location3] = 1;

while (destroyedBattleship < 3) {

  let userPrompt = parseInt(prompt("Ingresa una ubicación entre 1 - 7") - 1);

  if (userPrompt >= 0 && userPrompt <= 6) {
    if (grid[userPrompt] == 1) {
      destroyedBattleship += 1;
      grid[userPrompt] = 0;
      userTries += 1;
      alert("Haz dado con un barco");
    } else {
      alert("Haz fallado tu tiro!");
      userTries += 1;
    }
  } else {
    alert("Debes ingresar un número entre 1 y 7");
  }

}

alert("Haz intentado: " + userTries);