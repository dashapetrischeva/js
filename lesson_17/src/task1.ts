if (confirm('Start testing?')) {
	document.write(`<h2 class="title-solution">Solution:</h2>`)
	class ArrayOperations {

		static getPositiveNumber(arr: number[]): number {
			return arr.reduce((prevCount: number, el: number) => (el > 0 ? prevCount + 1 : prevCount), 0);
		}
		static getNegativeNumber(arr: number[]): number {
			return arr.reduce((prevCount: number, el: number) => (el < 0 ? prevCount + 1 : prevCount), 0);
		}
		static getNumCount(arr: number[], num: number): number {
			return arr.filter(el => el === num).length
		}
	}
	const arr = [5, 1, -9, 23, -90, 5, 34, -91]
	const num = 5
	document.write(`<div>Array: [${arr.join(', ')}]</div>`)
	document.write(`<div>Count of positive numbers:<strong> ${ArrayOperations.getPositiveNumber(arr)}</strong></div>`)
	document.write(`<div>Count of negative numbers:<strong> ${ArrayOperations.getNegativeNumber(arr)}</strong></div>`)
	document.write(`<div>Count of occurrences of number 5:<strong> ${ArrayOperations.getNumCount(arr, num)}</strong></div>`)

}