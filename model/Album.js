import mongoose from "mongoose";

// MODEL
export const Album = mongoose.model("Albums",{
  name: String,
  artist: String,
  jacketPath: String,
  discPath: String,
  spotifyLink: String,
  tracklist: Array
})

// FONCTIONS POUR CE MODEL

// GET
export const getAlbumsList = async (request, response, next)=>{
  try {
    const list = await Album.find()
    response.status(200).json(list)
  } catch (error) {
    next(error)
  }
}

export const getAlbum = async (request, response, next)=>{
  try {
    const name = request.params.name
    const album = await Album.find({name: name})
    response.status(200).json(album[0])
  } catch (error) {
    next(error)
  }
}

// POST
// UPDATE
// DELETE