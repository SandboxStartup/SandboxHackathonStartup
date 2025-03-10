const express = require("express");
const cors = require("cors");
import { User } from "@/app/Classes/User";
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
const users: User[] = [];

app.get("/", (req: any, res: any) => {
  res.send("Hello from Express!");
});

app.post("/api/createUser", (req: any, res: any) => {
    const user = req.body;
    if (!user) {
        res.status(400).send("User data is required");
        return;
    }
    if (!user._name || !user._age || !user._weight || !user._height || !user._level) {
        res.status(400).send("User data is incomplete");
        return;
    }
    if (users.find((u) => u.name === user.name)) {
        res.status(400).send("User already exists");
        return
    }
    else {
        users.push(user);
        res.send("User created successfully!");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
