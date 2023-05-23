import bookController from "@/controllers/bookController";

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const books = await bookController.getBooks();
				res.status(200).json(books);
			} catch (error) {
				res.status(500).json({
					error: "Error retrieving the books " + error.message,
				});
			}
			break;

		case "POST":
            try {
                const {title, author, description} = req.body;

                if (!title || !author) {
                    return res.status(400).json({error: "Title and Author are required"});
                }

                const book = await bookController.createBook({title, author, description});
                res.status(201).json(book);
            } catch (error) {
                res.status(500).json({ error: "Error creating the book " + error.message });
            }
			break;

		default:
            res.status(405).json({error: "Method not allowed"});
			break;
	}
}
