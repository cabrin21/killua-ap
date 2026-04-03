const express = require("express")
const axios = require("axios")
const app = express()

// 🔐 Clé API
const API_KEY = "killua"

// 🔥 Route principale
app.get("/api/anime/hwaifu", async (req, res) => {
  const apikey = req.query.apikey

  if (apikey !== API_KEY) {
    return res.json({ status: false, message: "clé api invalide" })
  }

  try {
    const response = await axios.get("https://api.waifu.pics/sfw/waifu")

    res.json({
      status: true,
      creator: "killua",
      result: response.data.url
    })
  } catch (err) {
    res.json({ status: false, message: "erreur serveur" })
  }
})

// 🔥 Endpoints bonus
app.get("/api/anime/neko", async (req, res) => {
  const response = await axios.get("https://api.waifu.pics/sfw/neko")
  res.json({ result: response.data.url })
})

app.get("/api/anime/megumin", async (req, res) => {
  const response = await axios.get("https://api.waifu.pics/sfw/megumin")
  res.json({ result: response.data.url })
})

// 🔥 Page d'accueil
app.get("/", (req, res) => {
  res.send("api killua en ligne 🚀")
})

// 🚀 Serveur
app.listen(process.env.PORT || 3000, () => {
  console.log("serveur killua lancé")
})
