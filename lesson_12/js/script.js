"use strict";

if (confirm('Start testing?')) {

    document.write("<h2>Given an array of 30 random integers.</h2>");

    // Task 1. Given an array of 30 random integers. Count the number of swaps performed during bubble sort.
    let arrRandom = [63, -72, -94, 89, -30, -38, -43, -65, 88, -74, 73, 89, 39, -78, 51, 8, -92, -93, -77, -45, -41, 29, 54, -94, 43, -50, 83, 66, 79, 39];

    document.write(`<div>Array: ${arrRandom.join(', ')}</div><hr>
        <h2 class="title-solution">Solution:</h2>`);

    document.write("<h3>Task 1. Count the number of swaps performed during bubble sort.</h3>");

    let arrRandom1 = [...arrRandom];

    /**
     * Counts the number of swaps performed during bubble sort.
     * @param {number[]} arr - The array.
     * @returns {number} The number of swaps performed during bubble sort.
     */
    function getNumExchangesBubble(arr) {
        let changed;
        let numChange = 0;

        do {
            changed = false;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    let tmp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                    changed = true;
                    numChange++;
                }
            }
        } while (changed);

        return numChange;
    }

    document.write(`<div>Number of swaps: <strong>${getNumExchangesBubble(arrRandom1)}</strong></div>`);

    // Task 2. Given an array of 30 random integers. Count the number of swaps performed during cocktail sort.
    document.write("<h3>Task 2. Count the number of swaps performed during cocktail sort.</h3>");

    let arrRandom2 = [...arrRandom];

    /**
     * Counts the number of swaps performed during cocktail sort.
     * @param {number[]} arr - The array.
     * @returns {number} The number of swaps performed during cocktail sort.
     */
    function getNumExchangesMix(arr) {
        let leftIndex = 0;
        let rightIndex = arr.length - 1;
        let numChange = 0;

        while (leftIndex < rightIndex) {
            for (let idx = leftIndex; idx < rightIndex; idx++) {
                if (arr[idx] > arr[idx + 1]) {
                    let tmp = arr[idx];
                    arr[idx] = arr[idx + 1];
                    arr[idx + 1] = tmp;
                    numChange++;
                }
            }

            rightIndex--;

            for (let idx = rightIndex; idx > leftIndex; idx--) {
                if (arr[idx] < arr[idx - 1]) {
                    let tmp = arr[idx];
                    arr[idx] = arr[idx - 1];
                    arr[idx - 1] = tmp;
                    numChange++;
                }
            }

            leftIndex++;
        }

        return numChange;
    }

    document.write(`<div>Number of swaps: <strong>${getNumExchangesMix(arrRandom2)}</strong></div>`);

    // Task 3. Count the number of swaps performed during insertion sort.
    document.write("<h3>Task 3. Count the number of swaps performed during insertion sort.</h3>");

    let arrRandom3 = [...arrRandom];

    /**
     * Counts the number of swaps performed during insertion sort.
     * @param {number[]} arr - The array.
     * @returns {number} The number of swaps performed during insertion sort.
     */
    function getNumExchangesInclusion(arr) {
        let numChange = 0;

        for (let k = 1; k < arr.length; k++) {
            const currentElement = arr[k];
            let i = k - 1;

            while (i >= 0 && arr[i] > currentElement) {
                arr[i + 1] = arr[i];
                numChange++;
                i--;
            }

            arr[i + 1] = currentElement;
        }

        return numChange;
    }

    document.write(`<div>Number of swaps: <strong>${getNumExchangesInclusion(arrRandom3)}</strong></div>`);
    // Task 4. For the sorting algorithms discussed above, display the sorting process step by step using tables similar to the example.
    document.write("<h3>Task 4. For the sorting algorithms discussed above, display the sorting process step by step using tables similar to the example.</h3>");

    let arrRandom4bubble = [...arrRandom];

    document.write(`<h2>Bubble Sort:</h2>`);
    document.write(`<div class="steps">`);
    document.write(`<p>[${arrRandom4bubble.join(", ")}]</p>`);

    /**
     * Displays the steps of bubble sort.
     * @param {number[]} arr - The array.
     */
    function showStepsBubble(arr) {
        let changed;

        do {
            changed = false;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    let tmp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                    changed = true;

                    document.write(`<p>[${arr.join(", ")}]</p>`);
                }
            }
        } while (changed);
    }

    showStepsBubble(arrRandom4bubble);

    document.write(`</div>`);

    let arrRandom4mix = [...arrRandom];

    document.write(`<h2>Cocktail Sort:</h2>`);
    document.write(`<div class="steps">`);
    document.write(`<p>[${arrRandom4mix.join(", ")}]</p>`);

    /**
     * Displays the steps of cocktail sort.
     * @param {number[]} arr - The array.
     */
    function showStepsMix(arr) {
        let leftIndex = 0;
        let rightIndex = arr.length - 1;

        while (leftIndex < rightIndex) {

            for (let idx = leftIndex; idx < rightIndex; idx++) {
                if (arr[idx] > arr[idx + 1]) {
                    let tmp = arr[idx];
                    arr[idx] = arr[idx + 1];
                    arr[idx + 1] = tmp;

                    document.write(`<p>[${arr.join(", ")}]</p>`);
                }
            }

            rightIndex--;

            for (let idx = rightIndex; idx > leftIndex; idx--) {
                if (arr[idx] < arr[idx - 1]) {
                    let tmp = arr[idx];
                    arr[idx] = arr[idx - 1];
                    arr[idx - 1] = tmp;

                    document.write(`<p>[${arr.join(", ")}]</p>`);
                }
            }

            leftIndex++;
        }
    }

    showStepsMix(arrRandom4mix);

    document.write(`</div>`);

    document.write(`<h2>Insertion Sort:</h2>`);

    let arrRandom4Inclusion = [...arrRandom];

    document.write(`<div class="steps">`);
    document.write(`<p>[${arrRandom4Inclusion.join(", ")}]</p>`);

    /**
     * Displays the steps of insertion sort.
     * @param {number[]} arr - The array.
     */
    function showStepsInclusion(arr) {

        for (let k = 1; k < arr.length; k++) {
            const currentElement = arr[k];
            let i = k - 1;

            while (i >= 0 && arr[i] > currentElement) {
                arr[i + 1] = arr[i];

                document.write(`<p>[${arr.join(", ")}]</p>`);

                i--;
            }

            arr[i + 1] = currentElement;

            document.write(`<p>[${arr.join(", ")}]</p>`);
        }
    }

    showStepsInclusion(arrRandom4Inclusion);

    document.write(`</div>`);
    // Task 5. Using an appropriate sorting algorithm and binary search, determine whether the name "Olga" exists in the array and find its index.

    const names = ['Daria', 'Maria', 'Olga', 'Nikolai', 'Anna', 'Sergei', 'Elena', 'Ivan', 'Tatiana', 'Mikhail'];

    document.write(`<h2>Given an array of names.</h2>`);
    document.write(`<div>[${names.join(", ")}]</div>`);

    document.write(`<h3>Task 5. Using an appropriate sorting algorithm and binary search, determine whether the name "Olga" exists in the array and find its index.</h3>`);

    /**
     * Sorts an array of strings using the bubble sort algorithm.
     * @param {string[]} arr - The array.
     * @returns {string[]} The sorted array.
     */
    function sortStringBubble(arr) {
        let changed;

        do {
            changed = false;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    let tmp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                    changed = true;
                }
            }
        } while (changed);

        return arr;
    }

    const sortedNames = sortStringBubble(names);

    document.write(`<div>Array sorted using bubble sort:</div>`);
    document.write(`<div><strong>[${sortedNames.join(", ")}]</strong></div>`);

    /**
     * Performs a binary search.
     * @param {string[]} arr
     * @param {string} searchElement
     * @param {number} start
     * @param {number} end
     * @returns {number}
     */
    function binarySearch(arr, searchElement, start, end) {
        if (start <= end) {
            const middle = Math.floor((start + end) / 2);

            if (arr[middle] === searchElement)
                return middle;
            else if (arr[middle] < searchElement)
                return binarySearch(arr, searchElement, middle + 1, end);
            else
                return binarySearch(arr, searchElement, start, middle - 1);
        }
        else
            return -1;
    }

    let indexName = binarySearch(sortedNames, 'Olga', 0, sortedNames.length - 1);

    document.write(`<hr>
        <h2 class="title-solution">Solution:</h2>`);

    if (indexName === -1) {
        document.write(`<div>The name is not found in the array.</div>`);
    }
    else {
        document.write(`<div>The name "Olga" is located at index ${indexName}.</div>`);
    }

    document.write(`<br><h2>Task 6. Using an appropriate sorting algorithm and binary search, determine whether there is a name with a length of 5 characters in the array and find its index.</h2>`);

    /**
     * Sorts an array of strings by their length using bubble sort.
     * @param {string[]} arr - The array.
     * @returns {string[]} The sorted array.
     */
    function sortStringBubbleByLength(arr) {
        let changed;

        do {
            changed = false;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1].length > arr[i].length) {
                    let tmp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                    changed = true;
                }
            }
        } while (changed);

        return arr;
    }

    const sortedNamesByLength = sortStringBubbleByLength(names);

    document.write(`<div>Array sorted by name length using bubble sort:</div>`);
    document.write(`<div><strong>[${sortedNamesByLength.join(", ")}]</strong></div>`);

    /**
     * Performs a binary search for a name with the specified length.
     * @param {string[]} arr
     * @param {number} nameLength
     * @param {number} start
     * @param {number} end
     * @returns {number}
     */
    function binarySearchNameLength(arr, nameLength, start, end) {
        if (start <= end) {
            const middle = Math.floor((start + end) / 2);

            if (arr[middle].length === nameLength)
                return middle;
            else if (arr[middle].length < nameLength)
                return binarySearchNameLength(arr, nameLength, middle + 1, end);
            else
                return binarySearchNameLength(arr, nameLength, start, middle - 1);
        }
        else
            return -1;
    }

    indexName = binarySearchNameLength(sortedNamesByLength, 5, 0, sortedNames.length - 1);

    document.write(`<hr>
        <h2 class="title-solution">Solution:</h2>`);

    if (indexName === -1) {
        document.write(`<div>No name with 5 characters was found in the array.</div>`);
    }
    else {
        document.write(`<div>The name "${sortedNamesByLength[indexName]}" has 5 characters and is located at index ${indexName}.</div>`);
    }
    document.write(`<br><h2>Task 7. Create a two-dimensional array (4×8) containing day numbers (define a separate type for days). Fill it with random values. Count the number of Sundays in each row.</h2>`);

    /**
     * Creates a two-dimensional array of random day numbers.
     * @returns {DayType[][]}
     */
    function createArrDayNum() {
        const min = 1;
        const max = 7;
        let arr = [];

        for (let i = 0; i < 4; i++) {
            arr[i] = [];

            for (let j = 0; j < 8; j++) {
                arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }

        return arr;
    }

    /**
     * Displays a two-dimensional array as a table.
     * @param {DayType[][]} arr - The two-dimensional array to display.
     */
    function printArr(arr) {
        document.write('<table>');

        for (let i = 0; i < arr.length; i++) {
            document.write('<tr>');

            for (let j = 0; j < arr[i].length; j++) {
                document.write(`<td>${arr[i][j]}</td>`);
            }

            document.write('</tr>');
        }

        document.write('</table>');
    }

    let dayNumbers = createArrDayNum();

    printArr(dayNumbers);

    let sevenNumRow = [];

    for (const row of dayNumbers) {
        const sevenNum = row.reduce(
            (prev, dayNum) => prev + (dayNum === 7 ? 1 : 0),
            0
        );

        sevenNumRow.push(sevenNum);
    }

    document.write(`<hr>
        <h2 class="title-solution">Solution:</h2>
        <div>Number of Sundays: <strong>${sevenNumRow.join(', ')}</strong></div>`);
}