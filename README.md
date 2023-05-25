# Back Crud with Mongoose

Case Study: Prisma ORM and MongoDB Atlas

## Steps

1. Create a cluster in [MongoDB Atlas](https://cloud.mongodb.com/)
2. Get the connection string from the cluster and store it in a [.env file](/.env.example)
3. Start prisma with `npx prisma init` and set the right provider in `schema.prisma`
4. Create the models in [schema.prisma](/prisma/schema.prisma)
>In a relational database you would need to use `prisma migrate` but not in MongoDB
5. Generate the prisma client with `npx prisma generate` and then create the connection in [/lib/prisma.js](/lib/prisma.js)
6. Create the [routes](/pages/api/) for the API using the connection
7. For better organization use [controllers](/controllers) to handle the manipulation of the data

## Tips with Prisma

- You can use `npx prisma db pull` to pull the database schema and automatically create your models in `schema.prisma`
- You can use `npx prisma studio` to open the prisma studio and see the data in the database

## References

- [Prisma Docs](https://www.prisma.io/docs/)
- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/getting-started/)
- [NextJS with Prisma Example](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs)