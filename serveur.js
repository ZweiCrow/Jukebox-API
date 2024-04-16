import app from "./app.js";
import { ENV } from "./config/env.js";
import mongoose from "mongoose";

// PORT
const PORT = ENV.PORT || 8000;

const Connexion = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@argon.e4u0pbq.mongodb.net/Jukebox`)
  console.log(`Connecté à la base de donnée !`);
}

// LISTENER
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
  Connexion()
});
