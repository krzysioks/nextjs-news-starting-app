import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export const ImagePage = ({ params }) => {
	const newsItemSlug = params.newsId;
	const newsItem = DUMMY_NEWS.find(
		(newsItem) => newsItem.slug === newsItemSlug
	);

	if (!newsItem) {
		notFound();
	}

	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
};

export default ImagePage;
