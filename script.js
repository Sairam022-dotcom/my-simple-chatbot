async function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    addMessage("Searching...", "bot");

    const reply = await getAIResponse(text);

    removeLastBot();
    addMessage(reply, "bot");
}

function addMessage(text, type) {
    let box = document.getElementById("chatbox");
    let div = document.createElement("div");

    div.classList.add("message", type);
    div.textContent = text;

    box.appendChild(div);
}

function removeLastBot() {
    let box = document.getElementById("chatbox");
    let last = box.lastChild;

    if (last && last.textContent === "Searching...") {
        box.removeChild(last);
    }
}

async function getAIResponse(prompt) {

    const API_KEY = "YOUR_API_KEY"; // Replace carefully!

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
}
