//import Jogo from "../Models/Jogo";

async function CadastrarJogo() {
    try {
        await fetch("https://api-games-to-x.onrender.com/api/games", {
            method: 'GET',
        }).then(response => {
            console.log(response.data)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return response.json();
        }).then(data => console.log(data))
        .catch(error => {
            if (error.message.includes('Failed to fetch')) {
                console.error('Network error or CORS issue:', error);
            } else {
                console.error('Fetch error:', error);
            }
        });
      } 
      catch (error) {
        console.error(error);
      }
}