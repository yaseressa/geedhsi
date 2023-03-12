import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import orderRoutes from "./handlers/Patient-handler";
import productRoutes from "./handlers/LocationHandler";
import userRoutes from "./handlers/UsersHandler";
import plantingRoutes from "./handlers/PlantingHandler";
import morgan from "morgan";
import cors from "cors";
const app: express.Application = express();
const address: string = "0.0.0.0:3000";
app.use(morgan("dev"));
app.use(bodyParser.json());
const corsOption = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOption));
app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

orderRoutes(app);
productRoutes(app);
userRoutes(app);
plantingRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
