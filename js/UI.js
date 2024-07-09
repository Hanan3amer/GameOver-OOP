// With Out OOP
let row = document.querySelector('#row')
let links = document.querySelectorAll('.link li a')
let detailRow = document.querySelector('#detailRow')
let detailesection = document.querySelector("#detailesection")
let gamessection = document.querySelector("#gamessection")
let closebtn = document.getElementById("close");
let header = document.getElementById("header");
console.log(links)
async function getGame(gameName) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8009e7db65msh05875e98bfdce8ap1fbfd8jsnb54e01642494',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameName}`, options);
    const response = await api.json();
    console.log(response)
    displaygame(response)
}

getGame("mmorpg")

function displaygame(response) {
    let box = ""
    for (let i = 0; i < response.length; i++) {

        box += `
         <div class="col-lg-3 col-md-6 my-3 gdisplay" onclick="getdetails(${response[i].id})">
                        <div class="card bg-transparent z-0">
                            <div class="layer">
                            </div>
                            <img src="${response[i].thumbnail}" class="card-img-top w-100 img-fluid p-3 ">
                            <div class="card-body">
                                <div class="top-text d-flex justify-content-between ">
                                    <h5 class="card-title text-white font z-2">${response[i].title}</h5>
                                    <span class="badge font z-2 bg-primary">Free</span>
                                </div>
                                <p class="card-text text-secondary font text-center">
                                    ${response[i].short_description.slice(0, 50)}</p>
                            </div>
                            <ul class="list-group d-flex justify-content-between flex-row py-2 px-3">
                                <li class="bg-transparent text-light font badge bg-col z-2">${response[i].genre}</li>
                                <li class="bg-transparent text-light font badge bg-col z-2">${response[i].platform}</li>
                        </div>
                    </div>
                    
        `
    }
    row.innerHTML = box

}
links.forEach(function (li) {
    li.addEventListener('click', function (e) {
        let gameName = e.target.getAttribute('data-game')
        console.log(gameName)
        getGame(gameName)
    })
})

2-details

async function getdetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8009e7db65msh05875e98bfdce8ap1fbfd8jsnb54e01642494',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const result = await api.json();
    console.log(result)
    displaydetails(result)
}
getdetails()

function displaydetails(result) {

    let cartoona = `
            <div class="col-lg-4">
                <img src="${result.thumbnail}" class="w-100 img-fluid">
            </div>
            <div class="col-lg-8">
                <h3 class="font text-white">Title: ${result.title}</h3>
                <h5 class="font text-white py-2">Category: <span class="game-info badge bg-info text-dark">${result.genre}</span></h5>
                <h5 class="font text-white py-2">Platform: <span class="game-info badge bg-info text-dark">${result.platform}</span></h5>
                <h5 class="game-info font text-white py-2">Status: <span class="badge bg-info text-dark">${result.status}</span></h5>
                <p class="font text-white detail">${result.description}</p>
                <button class="btn btn-outline-warning text-white font">Show Game</button>
            </div>        
        `
        detailRow.innerHTML = cartoona
        detailesection.classList.remove("d-none");
        detailesection.classList.add("d-block");
        gamessection.style = "display:none"
        gamessection.classList.remove("d-block");
        header.classList.add("d-none")
}

closebtn.addEventListener('click', function () {
    gamessection.classList.remove("d-none");
    gamessection.classList.add("d-block");
    detailesection.classList.add("d-none");
    detailesection.classList.remove("d-block");
    header.classList.remove("d-none");
    header.classList.add("d-block")
});