url="https://github.com/Lancelot56/essai/blob/main/pieces-autos.json"
fetch(url) 

.then(response => {
    return response.json();
  })
  .then(data => {

    let pieces = data;

    var output="";

    for (var i = 0; i < 5; i++) {
    output += `
  
    <ul>
                <li>Titre: ${ pieces[i].nom}</li>
                <li>Année: ${ pieces.results[i].Description}</li>
                <li>Genre(s): ${ pieces.results[i].Disponibilite}</li>
                <li>Votes: ${ pieces.results[i].Prix}</li>
                <li>Score IMDB: ${ pieces.results[i].Categories}</li>
                <div><img src</div>
            </ul>
        `;
    };
    document.getElementById("pieces").innerHTML = output;
  })