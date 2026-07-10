if (confirm('Start testing?')) {


	document.write(`<h2 class="title-solution">Solution:</h2>`)
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



	const totalPrice: number = sites.reduce(
		(prevSum, site) => prevSum + site.sitePrice, 0)
	document.write(` <div>1) Total cost of all websites: <strong>${totalPrice}</strong></div>`)


	const sitesNumber20002009: number = sites.reduce(
		(prevCount, site) => ((site.releaseYear >= 2000 && site.releaseYear <= 2009) ? prevCount + 1 : prevCount), 0)
	document.write(` <div>2) Number of websites created between 2000 and 2009: <strong>${sitesNumber20002009}</strong></div>`)


	const sitesNumberInvestmentAmountMore100000: number = sites.reduce(
		(prevCount, site) => {
			const totalInvestment = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investmentAmount, 0)
			return totalInvestment > 100000 ? prevCount + 1 : prevCount
		}, 0)
	document.write(` <div>3) Number of websites where the total sponsor investment was greater than 100000: <strong>${sitesNumberInvestmentAmountMore100000}</strong></div>`)



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
	document.write(`<div>4) Answer in the console</div>`)


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
	document.write(` <div>5) Year when the profit was the highest: <strong>${maxYear}</strong></div>`)



	const yearsArray: number[] = []
	for (const year in yearsProfit) {
		yearsArray.push(Number(year))
	}
	yearsArray.sort((a, b) => yearsProfit[b] - yearsProfit[a])
	document.write(`6) List of years, sorted by descending profit:<strong> ${yearsArray.join(', ')}</strong>`)


	let arrSitesLess10000 = sites
		.filter(site => site.sitePrice <= 10000)
		.map(site => ({ ...site, sponsors: [...site.sponsors] }));
	console.log(arrSitesLess10000)
	let arrSitesMore10000 = sites
		.filter(site => site.sitePrice > 10000)
		.map(site => ({ ...site, sponsors: [...site.sponsors] }));
	console.log(arrSitesMore10000)
	document.write(`<div>7) Answer in the console</div>`)
}