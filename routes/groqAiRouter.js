import express from "express";
import axios from "axios";
import logerAuthenticate from './../Middlewares/isLoggedInUser.js';

const router = express.Router();

router.post("/groq",logerAuthenticate, async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required." });

  try {
    const groqRes = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a hr. who take interview of a canditate and ask question to them in 10 words and the question level are easy okk." },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = groqRes.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("Groq error:", err.response?.data || err.message);
    res.status(500).json({ error: "Error from Groq." });
  }
});

export default router;
