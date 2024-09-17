export const GET = (request) => {
	console.log("request: ", request);
	return new Response("Hello worker!");
};
