let random = Math.floor((Math.random() * 3) + 1);

function winnerButton(id) {
  if (random == id){
      alert('Awesome! You won!');
  }  else {
      alert('You lost! Try again');
  }
}
