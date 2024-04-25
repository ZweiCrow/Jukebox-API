import express from "express";
import { getAlbum, getAlbumByArtist, getAlbumsList } from "../model/Album.js";

const routeur = express.Router()


// ROUTES
routeur.get("/",getAlbumsList)
routeur.get("/:name",getAlbum)
routeur.get("/by/:name",getAlbumByArtist)

export default routeur;