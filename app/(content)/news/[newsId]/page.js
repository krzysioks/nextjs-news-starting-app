import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
	if (!params.newsId) {
		return {
			title: "News Details",
			description: "Details Page of News",
		};
	}

	return {
		title: params.newsId,
		description: `Details Page of ${params.newsId}`,
	};
};

const NewsDetailsPage = async ({ params }) => {
	const newsSlug = params.newsId;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

	if (!newsItem) {
		return notFound();
	}

	return (
		<article className="news-article">
			<header>
				<Link href={`/news/${newsSlug}/image`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</Link>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
};

export default NewsDetailsPage;
