let row = document.querySelector('#row');
let detailRow = document.querySelector('#detailRow');

export class ui {
    // 1-
    displaygame(response) {
        let box = "";
        for (let i = 0; i < response.length; i++) {
            box += `
             <div class="col-lg-3 col-md-6 my-3 " id="card">
                            <div class="card bg-transparent z-0 gdisplay" data-detail="${response[i].id}">
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
            `;
        }
        row.innerHTML = box;
    }

    // 2-
    displaydetails(result) {
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
            `;
        detailRow.innerHTML = cartoona;
    }

}