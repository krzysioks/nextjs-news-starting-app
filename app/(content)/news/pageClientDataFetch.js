"use client";
import { useEffect, useState } from "react";

import NewsList from "@/components/NewsList";

// export const metadata = {
// 	title: "All News",
// 	description: "Browse all available news",
// };

const NewsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [news, setNews] = useState();

	useEffect(() => {
		const fetchNews = async () => {
			setIsLoading(true);
			const response = await fetch("http://localhost:8080/news");
			console.log("response: ", response);

			if (!response.ok) {
				setError("Failed to fetch news.");
				setIsLoading(false);
			}

			const news = await response.json();
			console.log("news: ", news);
			setIsLoading(false);
			setNews(news);
		};

		fetchNews();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	let newsContent;

	if (news) {
		newsContent = <NewsList news={news} />;
	}

	return (
		<>
			<h1>News Page</h1>
			{newsContent}
		</>
	);
};

export default NewsPage;
