const input = document.getElementById('input-el')
let lengthEL = document.getElementById("length")
let volumeEL = document.getElementById("volume")
let massEL = document.getElementById("mass")

input.addEventListener('input', function() {
  this.style.width = ((this.value.length + 1) * 40) + 'px';
  
  let inputNum = Number(input.value)
  lengthEL.textContent = `${inputNum} m = ${(inputNum*3.28084).toFixed(3)} ft | ${inputNum} ft = ${(inputNum*0.3048).toFixed(3)} m`
  volumeEL.textContent = `${inputNum} l = ${(inputNum*0.264172).toFixed(3)} gal | ${inputNum} gal = ${(inputNum*3.78541).toFixed(3)} l`
  massEL.textContent = `${inputNum} kg = ${(inputNum*2.20462).toFixed(3)} lb | ${inputNum} lb = ${(inputNum*0.453592).toFixed(3)} kg`
})


// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos