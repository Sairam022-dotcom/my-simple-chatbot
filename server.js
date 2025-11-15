// Import required packages
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());            // Allow frontend to talk to backend
app.use(express.json());    // Parse JSON requests

// Chat endpoint
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        // Call OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",   // Or "gpt-4o-mini" if available
                messages: [
                    { role: "system", content: "You are a mechanical engineering expert assistant." },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();

        // Send the reply to frontend
        res.json({ reply: data.choices[0].message.content });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error: " + err.message });
    }
});

// Start the server on Render port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
