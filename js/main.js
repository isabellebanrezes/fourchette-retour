// Etape 1 - Creation d'un objet "game" / L'objet contient le nombre à deviner et le nombre d'essais du joueur

const game = {
  searchedNumber: 0, // nombre à trouver initialiser à O
  attemps: 1, // coup d'essai effectue par le joueur
  score: [], // score du joueur
};

// Etape 2 - Fonction "generateRanddomNumber" qui permet de génrer un nombre aléatoire et de le retourner
//generateRandomNumber est le nom de la fonction
// Math.random() sert à générer un nombre décimal entre 0 et 1
// On le multiplie pour avoir un nombre plus grand ce nombre avec lequel on va le multiplier sera donner à posteriori à travers la fonction : on devra donner 2 valeurs au paramètres de la fonction : le max et le min
// Math.round permet d'arrondi un nombre pour avoir un nombre entier

function generateRandomNumber(min, max) {
  const randomBase = Math.random(); // je génere un nombre à virgule
  const randomNumber = randomBase * (max - min) + min; // on veut un nombre plus grand
  const roundedRandomNumber = Math.round(randomNumber); // Je veux un nombre sans virgule
  return roundedRandomNumber;
}

// Etape 3 - Creation de la fonction "play" qui va permettre de regrouper les instructions du jeu et permettra de relancer le jeu autant de fois que l'on veut

function play() {
  game.searchedNumber = generateRandomNumber(0, 500);
  console.log(game.searchedNumber);
  game.attempts = 1;

  //  Nombre saisi par le joueur "enteredNumber" quand la boite de dialogue "prompt s'affiche - On veut que le type de cette variable soit un nombre à cause de la boite de dialogue qui ne reconnait pas les variables de type "nombre" - donc on transforme en nombre avec la méthode "parseInt"

  let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ? "));

  // Tant que le nombre saisi par le joueur n'est pas égal au nombre à trouver on redemande un nombre
  while (enteredNumber !== game.searchedNumber) {
    // si le joueur n'a rien répondu dans la boite de dialogue on sert de la boucle

    if (!enteredNumber) {
      break;
    } else if (enteredNumber > game.searchedNumber) {
      enteredNumber = parseInt(prompt("Le nombre a deviné est plus petit !"));
    } else {
      enteredNumber = parseInt(prompt("Le nombre a trouvé est plus grand"));
    }
    game.attemps++;
  }
  if (enteredNumber) {
    game.score.push(game.attempts);
    console.log(game.score);
    if (game.score < 2) {
      alert(`Bravo, vous avez gagné en ${game.attemps} coups !`);
    } else {
      alert(`Bravo, vous avez gagné en ${game.attemps} coup !`);
    }
  } else {
    alert("Dommage que vous partez !");
  }

  const replay = confirm("Voulez-vous rejouer ?");
  if (replay) {
    play();
  }
}

play();

//-----------------------------------------------------------------------------------

/*
// Le nombre max
const MAX_NUMBER = 500; 

// Le nombre cherché
const searchedNumber = Math.round(Math.random() * MAX_NUMBER);

// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
let attempts = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (enteredNumber !== searchedNumber) {
    // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
    if(!enteredNumber){
        break;
    }
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    attempts += 1;
}

// on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
// soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
if(enteredNumber){
    // on affiche un message de victoire
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);
} else {
    // on affiche un message d'abandon
    alert('Vous abandonnez ? Dommage...');
}
*/
