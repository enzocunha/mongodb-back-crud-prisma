import bookController from "@/controllers/bookController";

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
				const book = await bookController.getBook(id);
				res.status(200).json(book);
			} catch (error) {
				res.status(500).json({
					error: "Error retrieving the book " + error.message,
				});
			}
			break;

		case "PUT":
			try {
				const { title, author, description } = req.body;
				const book = await bookController.updateBook({
					id,
					title,
					author,
					description,
				});
				res.status(200).json(book);
			} catch (error) {
				res.status(500).json({
					error: "Error updating the book " + error.message,
				});
			}
			break;

		case "DELETE":
			try {
				const book = await bookController.deleteBook(id);
				res.status(200).json(book);
			} catch (error) {
				res.status(500).json({
					error: "Error deleting the book " + error.message,
				});
			}
			break;

		default:
			res.status(405).json({ error: "Method not allowed" });
			break;
	}
}
