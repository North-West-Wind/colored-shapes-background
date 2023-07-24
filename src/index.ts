import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import { AddressInfo } from "net";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get(process.env.EXPRESS_ROUTE || "/", (req: Request, res: Response, next: NextFunction): void => {
	try {
    res.send("index.html");
	} catch (error) {
		next(error);
	}
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.log(`App listening on port ${(<AddressInfo>listener.address()).port}`);
});