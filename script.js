//Створюємо масив та заповнюємо його числами від -10 до 10
const arr = [];
for (let i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * 21) - 10; // Генеруємо число від -10 до 10
    arr.push(rand);
    }
console.log(arr); // Виводимо масив в консоль
		
let resultArr = document.getElementById("arrayResult");
resultArr.innerHTML = "Згенеровано масив чисел: " + arr;

//Функція знаходження мінімального та максимального елемента масиву
function findMinMax(arr) {
	let minPositive = Infinity;
	let maxNegative = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0 && arr[i] < minPositive) {
		minPositive = arr[i];
		}
		if (arr[i] < 0 && arr[i] > maxNegative) {
		maxNegative = arr[i];
	}
  }
	console.log(`Найбільший серед від'ємних: ${maxNegative}`);
	console.log(`Найменший серед додатніх: ${minPositive}`);
	return "Найбільший серед від'ємних: " + maxNegative + "<br> Найменший серед додатніх: " + minPositive;
}

let result = findMinMax(arr);
let resultFuncMinMax = document.getElementById("minMaxElemFunction");
resultFuncMinMax.innerHTML = result;

//Функція сортування вибором
function selectionSortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  console.log('Ця функція використовує алгоритм сортування методом вибору, який працює з часовою складністю O(n^2). Результат: ')
  console.log(arr);
}

selectionSortDescending(arr);

let resultSelectionSort = document.getElementById("selectionSort");
resultSelectionSort.innerHTML = "Результат сортування вибором від більшого до меньшого елемента: " + arr;

//Функція побудови гістограми
function drawChart() {
  // Отримуємо значення введених чисел з форми
  const input = document.getElementById("numbers").value;
  // Розбиваємо рядок на масив чисел за допомогою коми
  const numbers = input.split(",").map(Number);
  // Знаходимо максимальне число в масиві
  const maxNumber = Math.max(...numbers);
  // Отримуємо елемент canvas
  const canvas = document.getElementById("chart");
  // Отримуємо контекст для малювання
  const ctx = canvas.getContext("2d");
  // Встановлюємо ширину та висоту графіку
  const chartWidth = canvas.width - 100;
  const chartHeight = canvas.height - 100;
  // Обчислюємо ширину одного стовпця та відстань між ними
  const columnWidth = chartWidth / numbers.length;
  const columnMargin = columnWidth / 2;
  // Малюємо стовпці гістограми
  for (let i = 0; i < numbers.length; i++) {
    // Обчислюємо висоту стовпця відносно максимального числа
    const columnHeight = chartHeight * (numbers[i] / maxNumber);
    // Встановлюємо кольор стовпця
    ctx.fillStyle = "blue";
    // Малюємо стовпець
    ctx.fillRect(i * columnWidth + columnMargin, canvas.height - columnHeight - 50, columnWidth - columnMargin, columnHeight);
  }
}