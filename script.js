const title = document.getElementById("title");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Predefined mechanical engineering answers
const answers = {
  "torque": "Torque is a measure of the rotational force on an object, calculated as force × distance.",
  "cnc": "CNC stands for Computer Numerical Control, used for automated machining.",
  "material": "Mechanical engineers study material properties like strength, hardness, and elasticity.",
  "gear": "A gear is a rotating machine part with cut teeth that meshes with another gear to transmit torque.",
  "engine": "An engine converts fuel into mechanical energy to do work."
};

// Add message to chat
function addMessage(text, sender){
  const msg = document.createElement("div");
  msg.classList.add(sender==="user"?"user-msg":"bot-msg");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
function sendMessage(){
  const message = userInput.value.trim();
  if(!message) return;

  addMessage(message, "user");
  userInput.value = "";

  // Move title to top-left after first message
  title.classList.add("title-small");

  // Find answer or default
  let found = false;
  for(const key in answers){
    if(message.toLowerCase().includes(key)){
      addMessage(answers[key], "bot");
      found = true;
      break;
    }
  }
  if(!found) addMessage("Sorry, I don't know the answer yet.", "bot");
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e=>{
  if(e.key==="Enter") sendMessage();
});
