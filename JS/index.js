// Import The Classes
import { Details } from "./details.js";
import { Ui } from "./Ui.js";
// Define The Container which holds the data
export let ExitBtn = document.querySelector(".ExitBtn");
export let home = document.querySelector(".home");
export let details = document.querySelector(".details");

// Game Class
class Games {
    constructor() {
        this.getGames("mmorpg");
        // To Make The Active Class Switch On Each Category on click And To Change The Category of Games
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });
        // Make A New Object From -Ui Class-
        this.ui = new Ui();
    }

    async getGames(category) {
        // Show the loading screen
        const loading = document.querySelector(".Loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        // Make A (Try/Catch) To Make A Protective Code
        try {
            const api = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
                options
            );
            const response = await api.json();
            // Here is The Displaying Function From -Ui Class-
            this.ui.displayGames(response);
            this.addCardClickEvent();
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            // Hide the loading screen once the data is fetched or in case of an error
            loading.classList.add("d-none");
        }
    }

    // Add event listeners to all game cards
    addCardClickEvent() {
        // Loop through all the displayed cards
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", (e) => {
                const gameId = e.currentTarget.dataset.id;
                // Hide home section and show details section
                home.classList.add("d-none");
                details.classList.replace("d-none", "d-flex");
                // Create a new Details object to fetch and display the game details
                new Details(gameId);
            });
        });
    }
}

// Create a new instance of Games
new Games();
