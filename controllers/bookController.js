import prisma from "@/lib/prisma";

const bookController = {
	async getBooks() {
		try {
			const books = await prisma.books.findMany();
			return books;
		} catch (error) {
			console.log("Error retrieving books: ", error);
		}
	},

	async getBook(id) {
		try {
			const book = await prisma.books.findUnique({
				where: {
					id: parseInt(id),
				},
			});
			return book;
		} catch (error) {
			console.log("Error retrieving book: ", error);
		}
	},

	async createBook({ title, author, description }) {
		try {
			const book = await prisma.books.create({
				data: {
					title: title,
					description: description,
					author: author,
				},
			});
			return book;
		} catch (error) {
			console.log("Error creating book: ", error);
		}
	},

	async updateBook({ id, title, author, description }) {
		try {
			const book = await prisma.books.update({
				where: {
					id: parseInt(id),
				},
				data: {
					title: title,
					description: description,
					author: author,
				},
			});
			return book;
		} catch (error) {
			console.log("Error updating book: ", error);
		}
	},

	async deleteBook(id) {
		try {
			const book = await prisma.books.delete({
				where: {
					id: parseInt(id),
				},
			});
			return book;
		} catch (error) {
			console.log("Error deleting book: ", error);
		}
	},
};

export default bookController;
