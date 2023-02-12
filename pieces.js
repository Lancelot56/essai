url="https://github.com/Lancelot56/essai/blob/main/pieces-autos.json"
fetch(url) 

.then(response => {
    return response.json();
  })
  .then(data => {

    let OCM = data;

    var output="";

    for (var i = 0; i < 5; i++) {
    output += `
  
    <ul>
                <li>Titre: ${ OCM.results[i].title}</li>
                <li>Année: ${ OCM.results[i].year}</li>
                <li>Genre(s): ${ OCM.results[i].genres}</li>
                <li>Votes: ${ OCM.results[i].votes}</li>
                <li>Score IMDB: ${ OCM.results[i].imdb_score}</li>
                <div><img src=${OCM.results[i].image_url}</div>
            </ul>
        `;
    };
    document.getElementById("film").innerHTML = output;
  })