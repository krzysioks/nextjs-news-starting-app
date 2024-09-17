import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/utils/utils";

const LatestPage = () => {
	const latestNews = getLatestNews();
	// return null;
	return (
		<>
			<h2>Latest News</h2>
			<NewsList news={latestNews} />
		</>
	);
};

export default LatestPage;
