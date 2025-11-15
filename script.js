async function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();
    if (message === "") return;

    displayMessage(message, "user-message");
    inputField.value = "";

    const response = await getAIResponse(message);
    displayMessage(response, "bot-message");
}

function displayMessage(text, className) {
    let chatbox = document.getElementById("chatbox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(className);
    messageDiv.textContent = text;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function getAIResponse(question) {
    const API_KEY = "YOUR_API_KEY";  // <-- Replace this

    const result = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }]
        })
    });

    const data = await result.json();
    return data.choices[0].message.content;
}
