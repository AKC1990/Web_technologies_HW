// const a = Number.parseFloat(prompt("Введите первое число:"));
// const b = Number.parseFloat(prompt("Введите второе число:"));
// alert(`Результат сложения чисел ${a} и ${b} равен ${sum(a, b)}`)
// function sum(a, b) {
//     return a + b;
// }

// const user_name = prompt("Введите Ваше имя")
// function hello (name) {
//     console.log("Здравствуйте, " + name + "!")
// }
// hello(user_name)

// const good_life = confirm("Вам хорошо живется?");
// if (good_life) {
//     alert("Тогда мы идем к Вам!");
// }
// else {
//     alert("Ну, Вы держитесь там!");
// }


// switch(prompt('Введите фрукт')) {
//     case "Мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы":
//     case "Груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта');
//         break; 
// }


function getMaxEvenElement(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i+=2) {
        if (result < arr[i]) {
            result = arr[i];
        }
    }
    return result
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31


