    function winnerButton(id) {
    var random = Math.floor((Math.random() * 3) + 1);
    if (random == id) {
      alert("It was me, you won!")
    } else {
      alert("You lost! Try again.");
    }
      return false;
    }