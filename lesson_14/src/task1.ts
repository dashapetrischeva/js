if (confirm('Почати тестування?')) {
	// 	Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
	// ----- Властивості ------
	// назва компанії на час розробки (назву періодично змінюють)
	// власник компанії
	// споснсори (масив спонсорів)
	//              * прізвище спонсора
	//       * ім’я  спонсора
	//       * сума вкладень спонсора
	// рік випуску
	// вартість сайту
	// Знайти:
	// 1) загальну вартість усіх сайтів
	// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
	// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
	// 5) знайти рік, коли прибуток був найбільшим
	// 6) упорядкувати список за спаданням прибутку
	// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

	document.write(`<h2 class="title-solution">Рішення:</h2>`)
	type Sponsor = {
		lastName: string,
		firstName: string,
		investmentAmount: number,
	}
	type Site = {
		companyName: string,
		companyOwner: string,
		sponsors: Sponsor[],
		releaseYear: number,
		sitePrice: number,
	}

	const sites: Site[] = [
		{
			companyName: "TechCorp",
			companyOwner: "Ivan Ivanov",
			sponsors: [
				{ lastName: "Petrenko", firstName: "Olga", investmentAmount: 50000 },
				{ lastName: "Shevchenko", firstName: "Andriy", investmentAmount: 10000 }
			],
			releaseYear: 2023,
			sitePrice: 20000
		},
		{
			companyName: "WebSolutions",
			companyOwner: "Anna Kovalenko",
			sponsors: [
				{ lastName: "Kravets", firstName: "Dmytro", investmentAmount: 30000 }
			],
			releaseYear: 2022,
			sitePrice: 15000
		},
		{
			companyName: "FutureWeb",
			companyOwner: "Olena Melnyk",
			sponsors: [
				{ lastName: "Bondarenko", firstName: "Sergiy", investmentAmount: 70000 },
				{ lastName: "Tkachenko", firstName: "Maria", investmentAmount: 40000 }
			],
			releaseYear: 2008,
			sitePrice: 18000
		},
		{
			companyName: "DesignLab",
			companyOwner: "Oleg Hrytsenko",
			sponsors: [],
			releaseYear: 2020,
			sitePrice: 2000
		},
		{
			companyName: "CodeMasters",
			companyOwner: "Nataliya Shevchuk",
			sponsors: [
				{ lastName: "Ivanenko", firstName: "Pavlo", investmentAmount: 40000 }
			],
			releaseYear: 2023,
			sitePrice: 22000
		}
	]


	// 1) загальну вартість усіх сайтів

	const totalPrice: number = sites.reduce(
		(prevSum, site) => prevSum + site.sitePrice, 0)
	document.write(` <div>1) Загальна вартість усіх сайтів: <strong>${totalPrice}</strong></div>`)

	// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
	const sitesNumber20002009: number = sites.reduce(
		(prevCount, site) => ((site.releaseYear >= 2000 && site.releaseYear <= 2009) ? prevCount + 1 : prevCount), 0)
	document.write(` <div>2) Кількість сайтів, що було зроблено між 2000 та 2009 рр.: <strong>${sitesNumber20002009}</strong></div>`)

	// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	const sitesNumberInvestmentAmountMore100000: number = sites.reduce(
		(prevCount, site) => {
			const totalInvestment = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investmentAmount, 0)
			return totalInvestment > 100000 ? prevCount + 1 : prevCount
		}, 0)
	document.write(` <div>3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: <strong>${sitesNumberInvestmentAmountMore100000}</strong></div>`)

	//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

	function getSponsorsList(arr: Site[]): Sponsor[] {
		let sponsorsList: Sponsor[] = []

		for (let site of arr) {
			for (let sponsor of site.sponsors) {
				sponsorsList.push(sponsor)
			}
		}
		return sponsorsList
	}
	console.log(getSponsorsList(sites))
	document.write(`<div>4) Відповідь у консолі</div>`)

	// 5) знайти рік, коли прибуток був найбільшим
	type SitesProfit = { [year: number]: number }

	const yearsProfit: SitesProfit = {}

	for (const site of sites) {
		const year = site.releaseYear
		if (year in yearsProfit) {
			yearsProfit[year] += site.sitePrice
		} else {
			yearsProfit[year] = site.sitePrice
		}
	}
	let maxYear = 0
	let maxProfit = 0

	for (const year in yearsProfit) {
		if (yearsProfit[year] > maxProfit) {
			maxProfit = yearsProfit[year]
			maxYear = Number(year)
		}
	}
	document.write(` <div>5) Рік, коли прибуток був найбільшим: <strong>${maxYear}</strong></div>`)

	// 6) упорядкувати список yearsProfit за спаданням прибутку 

	const yearsArray: number[] = []
	for (const year in yearsProfit) {
		yearsArray.push(Number(year))
	}
	yearsArray.sort((a, b) => yearsProfit[b] - yearsProfit[a])
	document.write(`6) Список років, відсортований за спаданням прибутку:<strong> ${yearsArray.join(', ')}</strong>`)

	// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
	let arrSitesLess10000 = sites
		.filter(site => site.sitePrice <= 10000)
		.map(site => ({ ...site, sponsors: [...site.sponsors] }));
	console.log(arrSitesLess10000)
	let arrSitesMore10000 = sites
		.filter(site => site.sitePrice > 10000)
		.map(site => ({ ...site, sponsors: [...site.sponsors] }));
	console.log(arrSitesMore10000)
	document.write(`<div>7) Відповідь у консолі</div>`)
}