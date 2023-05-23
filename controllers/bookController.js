import prisma from "@/lib/prisma";

const bookController = {
	async getBooks() {
		const books = await prisma.books.findMany();
		return books;
	},

	async getBook(id) {
		const book = await prisma.books.findUnique({
			where: {
				id: id,
			},
		});
		return book;
	},

	async createBook({ title, author, description }) {
		const book = await prisma.books.create({
			data: {
				v: 0,
				title: title,
				description: description,
				author: author,
			},
		});
		return book;
	},

	async updateBook({ id, title, author, description }) {
		const book = await prisma.books.update({
			where: {
				id: id,
			},
			data: {
				title: title,
				description: description,
				author: author,
			},
		});
		return book;
	},

	async deleteBook(id) {
		const book = await prisma.books.delete({
			where: {
				id: id,
			},
		});
		return book;
	},
};

export default bookController;
