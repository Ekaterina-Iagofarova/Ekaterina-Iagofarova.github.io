/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let drag;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (drag) {
    drag.style.left = e.clientX - startX + 'px';
    drag.style.top = e.clientY - startY + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  const min = 10;
  const max = 100;
  const color = 0xffffff;

  div.className = 'draggable-div';
  div.style.background = '#' + random(0, color).toString(16);
  console.log(div.style.background);
  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.left = random(0, window.innerWidth) + 'px';
  div.style.width = random(min, max) + 'px';
  div.style.height = random(min, max) + 'px';

  div.addEventListener('mousedown', (e) => {
    drag = div;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  div.addEventListener('mouseup', () => (drag = false));

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  // console.log('hhh')
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
