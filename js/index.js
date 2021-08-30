// Домашка #17 — Events

// На странице находится инпут и кнопка. Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в списке ниже должна отобразится строка с тем, что было введено в инпуте.
// После этого инпут очищается.
// Если пользователь добавляет еще текст, он добавляется НАД предыдущим.
// Список должен быть сделан через ul > li.

let list = document.querySelector('.list');
const button = document.querySelector('button');

button.addEventListener('click', function (event) {

    if (document.querySelector('input').value !== ""){

        let li = document.createElement('li');
        li.innerHTML = document.querySelector('input').value;
        list.prepend(li);
        document.querySelector('input').value = '';

    } else alert('Сначала введите текст')
});
