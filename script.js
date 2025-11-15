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
 // Colour questions
  if (text.includes('colour') || text.includes('color')) return 'Colours make objects easy to identify. Ask me about any colour.';
  if (text.includes('red')) return 'Red is the colour of energy, heat, and passion.';
  if (text.includes('blue')) return 'Blue is a calm colour often linked to sky and water.';
  if (text.includes('green')) return 'Green represents nature, plants, and freshness.';
  if (text.includes('yellow')) return 'Yellow is a bright colour that represents sunlight and happiness.';
  if (text.includes('black')) return 'Black is a strong, bold colour often used for elegance.';
  if (text.includes('white')) return 'White represents purity, cleanliness, and simplicity.';
  if (text.includes('orange')) return 'Orange is a warm colour that represents enthusiasm and creativity.';
  if (text.includes('pink')) return 'Pink is a soft colour often linked to kindness and care.';
  if (text.includes('purple')) return 'Purple represents royalty, luxury, and imagination.';
  if (text.includes('brown')) return 'Brown is an earthy colour often seen in wood and soil.';
  if (text.includes('grey') || text.includes('gray')) return 'Grey is a neutral colour between black and white.';
  if (text.includes('favourite colour') || text.includes('favorite color')) return 'I like all colours equally because I am a bot!';
    // More Mechanical Engineering questions
  if (text.includes('thermodynamics')) return 'Thermodynamics deals with heat, energy, and work transformation.';
  if (text.includes('heat transfer')) return 'Heat transfer occurs through conduction, convection, and radiation.';
  if (text.includes('engine')) return 'An engine converts fuel energy into mechanical work.';
  if (text.includes('four stroke')) return 'A four-stroke engine completes intake, compression, power, and exhaust strokes.';
  if (text.includes('two stroke')) return 'A two-stroke engine completes power in just one crankshaft revolution.';
  if (text.includes('piston')) return 'A piston moves inside a cylinder to convert pressure into motion.';
  if (text.includes('bearing')) return 'A bearing reduces friction between moving parts.';
  if (text.includes('coupling')) return 'A coupling connects two shafts to transmit power.';
  if (text.includes('lathe')) return 'A lathe rotates the workpiece while a cutting tool removes material.';
  if (text.includes('milling')) return 'Milling uses a rotating cutting tool to remove material from a workpiece.';
  if (text.includes('drilling')) return 'Drilling is used to create round holes using a drill bit.';
  if (text.includes('welding')) return 'Welding joins metals by applying heat, pressure, or both.';
  if (text.includes('casting')) return 'Casting involves pouring molten metal into a mold to form shapes.';
  if (text.includes('forging')) return 'Forging shapes metal using compressive forces.';
  if (text.includes('stress strain curve')) return 'A stress-strain curve shows how a material behaves under load.';
  if (text.includes('elasticity')) return 'Elasticity is the ability of a material to return to its original shape after deformation.';
  if (text.includes('plastic deformation')) return 'Plastic deformation is permanent change in shape after the elastic limit is crossed.';
  if (text.includes('fatigue')) return 'Fatigue failure occurs due to repeated cyclic loading over time.';
  if (text.includes('lubrication')) return 'Lubrication reduces friction and wear between moving surfaces.';
  if (text.includes('refrigeration')) return 'Refrigeration removes heat to maintain a lower temperature environment.';
  if (text.includes('compressor')) return 'A compressor increases the pressure of a gas by reducing its volume.';
  if (text.includes('pump')) return 'A pump moves liquids from one place to another.';
  if (text.includes('hydraulics')) return 'Hydraulics uses pressurized fluids to generate force and motion.';
  if (text.includes('pneumatics')) return 'Pneumatics uses compressed air to power mechanical systems.';
  if (text.includes('cad')) return 'CAD means Computer-Aided Design used for drafting and modeling.';
  if (text.includes('cam')) return 'CAM stands for Computer-Aided Manufacturing used to control machines.';
  if (text.includes('mechatronics')) return 'Mechatronics blends mechanical engineering with electronics, control, and software.';
  if (text.includes('robotics')) return 'Robotics involves designing and controlling machines that can perform tasks automatically.';


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
