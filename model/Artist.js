import mongoose from "mongoose";

// MODEL
export const Artist = mongoose.model("Artists",{
  name: String,
  photoPath: String,
  spotifyLink: String,
})

// FONCTIONS POUR CE MODEL

// GET
export const getArtistsList = async (request, response, next)=>{
  try {
    const list = await Artist.find()
    response.status(200).json(list)
  } catch (error) {
    next(error)
  }
}

export const getArtist = async (request, response, next)=>{
  try {
    const name = request.params.name
    const artist = await Artist.find({name: name})
    response.status(200).json(artist[0])
  } catch (error) {
    next(error)
  }
}

// POST

// UPDATE

// DELETE