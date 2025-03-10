// 1. Estructuras condicionales simples
if (true) {
    console.log('Debería ejecutarse');
  }
  
  if (false) {
    console.log('Nunca se ejecuta');
  }
  
  // 2. Entrada del usuario y estructuras condicionales con 'if', 'else if' y 'else'
  const team = 'liverpool' // prompt('¿Cuál es tu equipo favorito de la Premier?').toLowerCase();
  
  if (team === 'liverpool') {
    console.log('Eres de los "Reds"');
  } else if (team === 'city') {
    console.log('Eres de los "Citizens"');
  } else if (team === 'arsenal') {
    console.log('Eres de los "Gunners"');
  } else {
    console.log('No tienes un equipo interesante');
  }
  
  // 3. Entrada del usuario y estructura condicional para evaluar el número de Champions
  const champions = '6' // parseInt(prompt('¿Cuántas Champions tiene tu club?'), 10);
  
  if (champions >= 2) {
    console.log('¡Son buenos eh!');
  } else {
    console.log('Están mejorando');
  }
  