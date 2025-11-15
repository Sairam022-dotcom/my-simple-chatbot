// 🔹 REPLACE this with your Render backend link
const BACKEND_URL = "https://my-simple-chatbot-dvjv.onrender.com";

// Elements
const title = document.getElementById("title");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Add messages
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add(sender === "user" ? "user-msg" : "bot-msg");
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, "user");
    userInput.value = "";

    // Move title to top-left after first message
    title.classList.add("title-small");

    try {
        const response = await fetch(`${BACKEND_URL}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        if (data.reply) {
            addMessage(data.reply, "bot");
        } else {
            addMessage("Bot error: No reply received.", "bot");
        }

    } catch (err) {
        addMessage("❌ Cannot connect to server. Check Render backend.", "bot");
    }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});
