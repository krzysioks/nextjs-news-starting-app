import { notFound } from "next/navigation";
import { getNewsItem } from "@/utils/utils";

export const ImagePage = async ({ params }) => {
	const newsItemSlug = params.newsId;
	const newsItem = await getNewsItem(newsItemSlug);

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
