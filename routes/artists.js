import express from "express";
import { getArtist, getArtistsList } from "../model/Artist.js";

const routeur = express.Router()


// ROUTES
routeur.get("/",getArtistsList)
routeur.get("/:name",getArtist)

export default routeur;