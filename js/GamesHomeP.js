import { ui } from "./ui1.js";
import { details } from "./GamesDetails.js";

let header = document.getElementById("header");
let detailesection = document.querySelector("#detailesection");
let gamessection = document.querySelector("#gamessection");
let links = document.querySelectorAll('.link li a');
let reloader = document.getElementById("reload")
export class games {
    constructor() {
        this.ui = new ui();
        this.getGame("mmorpg");
        links.forEach((li) => {
            li.addEventListener('click', (e) => {
                let gameName = e.target.getAttribute('data-game');
                console.log(gameName);
                this.getGame(gameName);
            });
        });
    }

    async getGame(gameName) {
        reloader.style.display = "none";
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8009e7db65msh05875e98bfdce8ap1fbfd8jsnb54e01642494',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameName}`, options);
        const response = await api.json();
        console.log(response);
        this.ui.displaygame(response);
        this.detailssec();


    }
    detailssec() {
        const cards = document.querySelectorAll('.gdisplay');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-detail');
                this.show(id);
            });
        });
    }
    show(id) {
        let detail = new details(id);
        detailesection.classList.remove("d-none");
        detailesection.classList.add("d-block");
        gamessection.style = "display:none";
        gamessection.classList.remove("d-block");
        header.classList.add("d-none");
    }
}