import { createServer , router , middlewares} from "json-server";
import users from "./users.json";
import products from "./products.json";

const server = createServer();
const PORT = process.env.PORT || 8080;
server.db = {
  users: users.users,
  products: products.products,
};

server.use(middlewares);

const jsonRouter = router(server.db);
server.use(jsonRouter);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
