let detailsData = document.querySelector("#detailsData");
let rowData = document.querySelector("#rowData");

export class Ui {
    // Method to display the games
    displayGames(data) {
        let box = ``;
        for (let i = 0; i < data.length; i++) {
            box += `<div class="col-xl-3 col-md-6">
                        <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                            <div class="card-body">
                                <figure class="position-relative">
                                    <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
                                </figure>
                                <figcaption>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small">${data[i].title}</h3>
                                        <span class="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p class="card-text small text-center opacity-50">
                                        ${data[i].short_description.split(" ", 8).join(" ")}
                                    </p>
                                </figcaption>
                            </div>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-color">${data[i].genre}</span>
                                <span class="badge badge-color">${data[i].platform}</span>
                            </footer>
                        </div>
                    </div>`;
        }
        rowData.innerHTML = box;
    }

    // Method to display the game's details
    displayDetails(data) {
        let box = `
        <div class="col-md-6">
            <div class="Image">
                <img src="${data.thumbnail}" class="w-100 img-fluid" alt="DetailsImage">
            </div>
        </div>
        <div class="col-md-6">
            <h1>Title : ${data.title}</h1>
            <p>Category: <span class="badge text-bg-info">${data.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info">${data.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info">${data.status}</span> </p>
            <p class="small">${data.description}</p>
            <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
        </div>`;
        detailsData.innerHTML = box;
    }
}
