import { Suspense } from "react";
import NewsList from "@/components/NewsList";
import Link from "next/link";

import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/utils/utils";

const FilterHeader = async ({ year, month }) => {
	const availableYears = await getAvailableNewsYears();
	let links = availableYears;

	if (
		(year && !availableYears.includes(year)) ||
		(month && !getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error("Invalid filter.");
	}

	if (year && !month) {
		links = getAvailableNewsMonths(year);
	}

	if (year && month) {
		links = [];
	}

	return (
		<header id="archive-header">
			<nav>
				<ul>
					{links.map((link) => {
						const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
						return (
							<li key={link}>
								<Link href={href}>{link}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

const FilteredNews = async ({ year, month }) => {
	let news;

	if (year && !month) {
		news = await getNewsForYear(year);
	}

	if (year && month) {
		news = await getNewsForYearAndMonth(year, month);
	}

	let newsContent = <p>No news found for the selected filter.</p>;

	if (news?.length) {
		newsContent = <NewsList news={news} />;
	}

	return newsContent;
};

const FilteredNewsPage = async ({ params }) => {
	const { filter } = params;
	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	return (
		<>
			<Suspense fallback={<p>Loading Filter..</p>}>
				<FilterHeader year={selectedYear} month={selectedMonth} />
			</Suspense>
			<Suspense fallback={<p>Loading Data..</p>}>
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
};

export default FilteredNewsPage;
