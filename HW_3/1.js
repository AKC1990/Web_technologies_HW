/* Решение "в лоб"*/
// const temperature_in_celsius = parseFloat(prompt("Укажите температуру в градусах Цельсия"));
// alert(`Цельсий: ${temperature_in_celsius}, Фаренгейт: ${((9 / 5) * temperature_in_celsius + 32).toFixed(1)}`)

/* Решение через функцию */
function getTempInF(temperature) {
    return `Цельсий: ${temperature}, Фаренгейт: ${((9 / 5) * temperature + 32).toFixed(1)}`
}
alert(getTempInF(parseFloat(prompt("Укажите температуру в градусах Цельсия"))))