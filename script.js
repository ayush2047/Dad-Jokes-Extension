fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData =>{ 
        // console.log();
        var jokeText = jokeData.attachments[0].text;
          var jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeText;
    })