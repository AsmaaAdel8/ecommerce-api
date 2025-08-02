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
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const jsonRouter = router(server.db);
server.use(jsonRouter);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
