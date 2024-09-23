import NewsList from "@/components/NewsList";
import { getAllNews } from "@/utils/utils";

export const metadata = {
	title: "All News",
	description: "Browse all available news",
};

const NewsPage = async () => {
	const news = await getAllNews();

	return (
		<>
			<h1>News Page</h1>
			<NewsList news={news} />
		</>
	);
};

export default NewsPage;
