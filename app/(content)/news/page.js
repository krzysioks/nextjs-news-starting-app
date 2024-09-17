import NewsList from "@/components/NewsList";

import { DUMMY_NEWS } from "@/dummy-news";

export const metadata = {
	title: "All News",
	description: "Browse all available news",
};

const NewsPage = () => {
	return (
		<>
			<h1>News Page</h1>
			<NewsList news={DUMMY_NEWS} />
		</>
	);
};

export default NewsPage;
