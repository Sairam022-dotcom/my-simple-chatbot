async function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    addMessage("Typing...", "bot"); // temporary loading message

    const reply = await getAIResponse(text);

    removeTypingMessage();
    addMessage(reply, "bot");
}

function addMessage(text, sender) {
    let chatbox = document.getElementById("chatbox");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;

    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function removeTypingMessage() {
    let chatbox = document.getElementById("chatbox");
    let last = chatbox.lastChild;
    if (last && last.textContent === "Typing...") {
        chatbox.removeChild(last);
    }
}

async function getAIResponse(prompt) {

    const API_KEY = "YOUR_API_KEY";   // <-- Replace with your OpenAI key

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await res.json();
        return data.choices[0].message.content;
        
    } catch (error) {
        return "Error: Could not connect to AI server.";
    }
}
