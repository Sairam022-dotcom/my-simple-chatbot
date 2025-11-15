async function sendMessage() {
    const input = document.getElementById("userInput");
    const msg = input.value.trim();

    if (!msg) return;

    // Move title to top-left
    const title = document.getElementById("title");
    title.classList.remove("title-center");
    title.classList.add("title-top");

    addMessage("You", msg, "user");
    input.value = "";

    const apiKey = "YOUR_API_KEY";

    addMessage("MechChat", "...thinking...", "bot");

    const messagesDiv = document.getElementById("messages");

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are a mechanical engineering expert assistant." },
                    { role: "user", content: msg }
                ]
            })
        });

        const data = await response.json();
        
        messagesDiv.lastChild.remove(); // remove thinking
        const reply = data.choices[0].message.content;

        addMessage("MechChat", reply, "bot");

    } catch (error) {
        messagesDiv.lastChild.remove();
        addMessage("MechChat", "Error: Unable to connect to OpenAI.", "bot");
    }
}

function addMessage(sender, text, type) {
    const messagesDiv = document.getElementById("messages");
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<span class="${type}">${sender}:</span> ${text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

