
if (confirm('Почати тестування?')) {
  document.write("<h2> Дано масив 30 випадкових цілих чисел. </h2>")
  // Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
  let arrRandom: number[] = [63, -72, -94, 89, -30, -38, -43, -65, 88, -74, 73, 89, 39, -78, 51, 8, -92, -93, -77, -45, -41, 29, 54, -94, 43, -50, 83, 66, 79, 39]
  document.write(`<div>Масив: ${arrRandom.join(', ')}</div><hr>
								<h2 class="title-solution">Рішення:</h2>`)
  document.write("<h3> Задача 1. Підрахувати скільки було обмінів під час сортування бульбашкою</h3>")





  let arrRandom1: number[] = [...arrRandom];
  /**
   * Підрахувує кількість обмінів під час сортування бульбашкою
   * @param{number[]} arr - масив 
   * @returns{number} кількість обмінів під час сортування бульбашкою
   */
  function getNumExchangesBubble(arr: number[]): number {
    let changed: boolean
    let numChange: number = 0
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let tmp: number = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          changed = true;
          numChange++
        }
      }
    }
    while (changed)
    return numChange
  }
  document.write(` <div>Кількість обмінів: <strong>${getNumExchangesBubble(arrRandom1)}</strong></div>`)

  // Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
  document.write("<h3> Задача 2. Підрахувати скільки було обмінів під час сортування змішуванням</h3>")
  let arrRandom2: number[] = [...arrRandom];

  /**
   * Підрахувує кількість обмінів під час сортування змішуванням
   * @param{number[]} arr - масив 
   * @returns{number} кількість обмінів під час сортування змішуванням
   */
  function getNumExchangesMix(arr: number[]): number {
    let leftIndex: number = 0
    let rightIndex: number = arr.length - 1
    let numChange: number = 0
    while (leftIndex < rightIndex) {
      for (let idx = leftIndex; idx < rightIndex; idx++) {
        if (arr[idx] > arr[idx + 1]) {
          let tmp: number = arr[idx]
          arr[idx] = arr[idx + 1]
          arr[idx + 1] = tmp
          numChange++
        }
      }
      rightIndex--;
      for (let idx = rightIndex; idx > leftIndex; idx--) {
        if (arr[idx] < arr[idx - 1]) {
          let tmp: number = arr[idx]
          arr[idx] = arr[idx - 1]
          arr[idx - 1] = tmp
          numChange++
        }
      }
      leftIndex++;
    }
    return numChange
  }
  document.write(`<div>Кількість обмінів: <strong>${getNumExchangesMix(arrRandom2)}</strong></div>`)

  // Задача 3. Підрахувати скільки було обмінів під час сортування включеннями
  document.write("<h3> Задача 3. Підрахувати скільки було обмінів під час сортування включеннями</h3>")
  let arrRandom3: number[] = [...arrRandom];

  /**
 * Підрахувує кількість обмінів під час сортування включеннями
 * @param {number[]} arr - масив 
 * @returns{number} кількість обмінів під час сортування включеннями
 */
  function getNumExchangesInclusion(arr: number[]): number {

    let numChange: number = 0
    for (let k = 1; k < arr.length; k++) {
      const currentElement: number = arr[k]
      let i: number = k - 1
      while (i >= 0 && arr[i] > currentElement) {
        arr[i + 1] = arr[i]
        numChange++
        i--
      }
      arr[i + 1] = currentElement

    }
    return numChange
  }
  document.write(`<div>Кількість обмінів: <strong>${getNumExchangesInclusion(arrRandom3)}</strong></div>`)

  // Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
  document.write("<h3> Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.</h3>")
  let arrRandom4bubble: number[] = [...arrRandom];




  document.write(`<h2>Сортування бульбашкою:</h2>`)
  document.write(`<div class="steps">`)
  document.write(`<p>[${arrRandom4bubble.join(", ")}]</p>`)

  /**
   * Виводить етапи сортування масиву бульбашкою
   * @param{number[]} arr масив
   */
  function showStepsBubble(arr: number[]): void {
    let numChange: number = 0
    let changed: boolean
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let tmp: number = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          changed = true;
          numChange++
          document.write(`<p>[${arr.join(", ")}]</p>`)
        }
      }
    }
    while (changed)
  }
  showStepsBubble(arrRandom4bubble)
  document.write(`</div>`)


  let arrRandom4mix: number[] = [...arrRandom];

  document.write(`<h2>Сортування змішуванням:</h2>`)
  document.write(`<div class="steps">`)
  document.write(`<p>[${arrRandom4mix.join(", ")}]</p>`)

  /**
 * Виводить етапи сортування масиву змішуванням
 * @param{number[]} arr масив
 */
  function showStepsMix(arr: number[]): void {
    let leftIndex: number = 0
    let rightIndex: number = arr.length - 1
    let numChange: number = 0
    while (leftIndex < rightIndex) {
      for (let idx = leftIndex; idx < rightIndex; idx++) {
        if (arr[idx] > arr[idx + 1]) {
          let tmp: number = arr[idx]
          arr[idx] = arr[idx + 1]
          arr[idx + 1] = tmp
          numChange++
          document.write(`<p>[${arr.join(", ")}]</p>`)
        }
      }
      rightIndex--;
      for (let idx = rightIndex; idx > leftIndex; idx--) {
        if (arr[idx] < arr[idx - 1]) {
          let tmp: number = arr[idx]
          arr[idx] = arr[idx - 1]
          arr[idx - 1] = tmp
          numChange++
          document.write(`<p>[${arr.join(", ")}]</p>`)
        }
      }
      leftIndex++;
    }
  }
  showStepsMix(arrRandom4mix)
  document.write(`</div>`)

  document.write(`<h2>Сортування включенням:</h2>`)
  let arrRandom4Inclusion: number[] = [...arrRandom];
  document.write(`<div class="steps">`)
  document.write(`<p>[${arrRandom4Inclusion.join(", ")}]</p>`)

  /**
 * Виводить етапи сортування масиву включеннями
 * @param{number[]} arr масив
 */
  function showStepsInclusion(arr: number[]): void {
    for (let k = 1; k < arr.length; k++) {
      const currentElement: number = arr[k]
      let i: number = k - 1
      while (i >= 0 && arr[i] > currentElement) {
        arr[i + 1] = arr[i]
        document.write(`<p>[${arr.join(", ")}]</p>`)
        i--
      }
      arr[i + 1] = currentElement
      document.write(`<p>[${arr.join(", ")}]</p>`)
    }
  }
  showStepsInclusion(arrRandom4Inclusion)
  document.write(`</div>`)
  //Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

  const names: string[] = ['Daria', 'Maria', 'Olga', 'Nikolai', 'Anna', 'Sergei', 'Elena', 'Ivan', 'Tatiana', 'Mikhail'];

  document.write(`<h2>Дано масив імен.</h2>`)

  document.write(`<div>[${names.join(", ")}]</div>`)
  document.write(`<h3>Задача 5. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.</h3>`)

  /**
   * Сортування масива бульбашкою
   * @param{string[]} arr масив
   * @returns{string[]} відсортований масив
   */
  function sortStringBubble(arr: string[]): string[] {
    let changed: boolean
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let tmp: string = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          changed = true;
        }
      }
    }
    while (changed)
    return arr
  }
  const sortedNames: string[] = sortStringBubble(names)
  document.write(`<div>Масив відсортований бульбашкою:</div>`)
  document.write(`<div><strong>[${sortedNames.join(", ")}]</strong></div>`)

  /**
   * Бінарний пошук
   * @param{string[]} arr 
   * @param{string} searchElement 
   * @param{number} start 
   * @param{number} end 
   * @returns{number}
   */
  function binarySearch(arr: string[], searchElement: string, start: number, end: number): number {
    if (start <= end) {
      const middle: number = Math.floor((start + end) / 2)
      if (arr[middle] === searchElement) return middle
      if (arr[middle] < searchElement)
        return binarySearch(arr, searchElement, middle + 1, end)
      if (arr[middle] > searchElement)
        return binarySearch(arr, searchElement, start, middle - 1)
    } else return -1
  }
  let indexName = binarySearch(sortedNames, 'Olga', 0, sortedNames.length - 1)
  document.write(`<hr>
								<h2 class="title-solution">Рішення:</h2>`)
  if (indexName === -1) {
    document.write(`<div>Такого імені у масиві немає</div>`)
  }
  else {
    document.write(`<div>Ім’я «Olga» у масиві під номером ${indexName}</div>`)
  }


  document.write(`<br><h2>Задача 6. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
</h2>`)
  function sortStringBubbleByLength(arr: string[]): string[] {
    let changed: boolean
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1].length > arr[i].length) {
          let tmp: string = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          changed = true;
        }
      }
    }
    while (changed)
    return arr
  }
  const sortedNamesByLength: string[] = sortStringBubbleByLength(names)
  document.write(`<div>Масив відсортований бульбашкою за довжиною імен:</div>`)
  document.write(`<div><strong>[${sortedNamesByLength.join(", ")}]</strong></div>`)
  /**
   * Бінарний пошук імені довжиною 5 символів
   * @param{string[]} arr 
   * @param{number} nameLength 
   * @param{number} start 
   * @param{number} end 
   * @returns{number}  
   */
  function binarySearchNameLength(arr: string[], nameLength: number, start: number, end: number): number {
    if (start <= end) {
      const middle: number = Math.floor((start + end) / 2)
      if (arr[middle].length === nameLength) return middle
      if (arr[middle].length < nameLength)
        return binarySearchNameLength(arr, nameLength, middle + 1, end)
      if (arr[middle].length > nameLength)
        return binarySearchNameLength(arr, nameLength, start, middle - 1)
    } else return -1
  }
  indexName = binarySearchNameLength(sortedNamesByLength, 5, 0, sortedNames.length - 1)
  document.write(`<hr>
								<h2 class="title-solution">Рішення:</h2>`)
  if (indexName === -1) {
    document.write(`<div>Ім’я довжиною 5 символів у масиві немає</div>`)
  }
  else {
    document.write(`<div>Ім’я довжиною 5 символів ${sortedNamesByLength[indexName]} у масиві під номером ${indexName}</div>`)
  }

  document.write(`<br><h2>Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
</h2>`)
  type DayType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * 
   * @returns {DayType[][]}
   */
  function createArrDayNum(): DayType[][] {
    const min: number = 1
    const max: number = 7
    let arr: DayType[][] = []
    for (let i = 0; i < 4; i++) {
      arr[i] = []
      for (let j = 0; j < 8; j++) {
        arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min as DayType
      }
    }
    return arr
  }


  /**
   * Виводить двовимірний масив у вигляді таблиці
   * @param{DayType[][]} arr - двовимірний масив, який треба вивести
   */
  function printArr(arr: DayType[][]): void {
    document.write('<table>')
    for (let i = 0; i < arr.length; i++) {
      document.write('<tr>')
      for (let j = 0; j < arr[i].length; j++) {
        document.write(`<td>${arr[i][j]}</td>`)
      }
      document.write('</tr>')
    }
    document.write('</table>')
  }

  let dayNumbers: DayType[][] = createArrDayNum()
  printArr(dayNumbers)

  let sevenNumRow: number[] = []
  for (const row of dayNumbers) {
    const sevenNum = row.reduce((prev, dayNum) => prev + (dayNum === 7 ? 1 : 0), 0)
    sevenNumRow.push(sevenNum)
  }


  document.write(`<hr>
								<h2 class="title-solution">Рішення:</h2><div>Кількість неділь: <strong>${sevenNumRow.join(', ')}</strong></div>`)
}
