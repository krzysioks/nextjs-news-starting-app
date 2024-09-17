import NewsList from "@/components/NewsList";

export const metadata = {
	title: "All News",
	description: "Browse all available news",
};

const NewsPage = async () => {
	const response = await fetch("http://localhost:8080/news");

	if (!response.ok) {
		throw new Error("Failed to fetch news.");
	}

	const news = await response.json();

	return (
		<>
			<h1>News Page</h1>
			<NewsList news={news} />
		</>
	);
};

export default NewsPage;
