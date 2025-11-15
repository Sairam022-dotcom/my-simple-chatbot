const chat = document.getElementById('chat');
const msg = document.getElementById('msg');
const send = document.getElementById('send');

function addLine(who, text) {
  const p = document.createElement('p');
  p.innerText = who + ': ' + text;
  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
}

function botReply(text) {
  text = text.toLowerCase();
  if (text.includes('hello') || text.includes('hi')) return 'Hello! I am a simple bot.';
  if (text.includes('what') && text.includes('name')) return 'I am called SimpleBot.';
  if (text.includes('help')) return 'Tell me what you want to know about mechanical engineering.';
  if (text.includes('thanks') || text.includes('thank')) return 'You are welcome!';
  return "Sorry, I don't understand that yet.";
}

send.onclick = () => {
  const your = msg.value.trim();
  if (!your) return;
  addLine('You', your);
  const reply = botReply(your);
  setTimeout(() => addLine('Bot', reply), 500);
  msg.value = '';
};
