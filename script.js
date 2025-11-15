async function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    addMessage("Typing...", "bot"); // temporary bubble

    const reply = await getAIResponse(text);

    removeTypingMessage();
    addMessage(reply, "bot");
}

function addMessage(text, sender) {
    const chatbox = document.getElementById("chatbox");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;

    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function removeTypingMessage() {
    const chatbox = document.getElementById("chatbox");
    const last = chatbox.lastChild;

    if (last && last.textContent === "Typing...") {
        chatbox.removeChild(last);
    }
}

async function getAIResponse(prompt) {

    const API_KEY = "YOUR_API_KEY";  // replace safely

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

    } catch (e) {
        return "Error: Cannot reach AI servers.";
    }
}
