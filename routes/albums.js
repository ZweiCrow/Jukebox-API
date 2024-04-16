import express from "express";
import { getAlbum, getAlbumsList } from "../model/Album.js";

const routeur = express.Router()


// ROUTES
routeur.get("/",getAlbumsList)
routeur.get("/:name",getAlbum)

export default routeur;