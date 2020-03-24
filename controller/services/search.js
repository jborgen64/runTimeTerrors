function getCharacters() {
    const ul = document.getElementById('charactersList');
    const url = 'http://localhost:3000/https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&limit=10';    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) { 
      let characters = data.results;
      return characters.map(function(character) {
          
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = character.image.icon_url;
        span.innerHTML = `${character.deck}`;
        append(ul, li);
        append(li, img);
        append(li, span);