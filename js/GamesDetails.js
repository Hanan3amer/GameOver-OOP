import { ui } from "./ui1.js";

let header = document.getElementById("header");
let detailesection = document.querySelector("#detailesection");
let gamessection = document.querySelector("#gamessection");
let closebtn = document.getElementById("close");
let reloader = document.getElementById("reload");
export class details {
    constructor(id) {
        this.ui = new ui();
        closebtn.addEventListener('click', () => {
            gamessection.classList.remove("d-none");
            gamessection.classList.add("d-block");
            detailesection.classList.add("d-none");
            detailesection.classList.remove("d-block");
            header.classList.remove("d-none");
            header.classList.add("d-block");
        });
        this.getdetails(id);
    }

    async getdetails(id) {
        reloader.style.display = "none";
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8009e7db65msh05875e98bfdce8ap1fbfd8jsnb54e01642494',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const result = await api.json();
        console.log(result);
        this.ui.displaydetails(result);
    }
}