import { Ui } from "./Ui.js";
export let ExitBtn = document.querySelector(".ExitBtn");
export let home = document.querySelector(".home");
export let details = document.querySelector(".details");
// Details Part
export class Details {
    constructor(Id) {
        // Make A New (Ui) to Show The Details Design
        this.ui = new Ui();
        // Make Exit Button and Loading Screen Work
        ExitBtn.addEventListener("click", function () {
            // Show the loading screen
            home.classList.replace("d-none", "d-block");
            details.classList.replace("d-flex", "d-none");
        });

        // Fetch and display game details
        this.getDetails(Id);
    }

    async getDetails(gameId) {
        // Show the loading screen
        const loading = document.querySelector(".Loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "a09bf716b4msh3c266890d6bf6b4p14966ajsn3d074b68a7d7",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
        // Make A (Try/Catch) To Make A Protective Code
        try {
            const api = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
                options
            );
            const response = await api.json();
            // Display the game details using Ui class
            this.ui.displayDetails(response);
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            // Hide the loading screen once the data is fetched or in case of an error
            loading.classList.add("d-none");
        }
    }
}
