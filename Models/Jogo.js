export default class Jogo {

    Name = new String();
    Description = new String();
    ReleaseOn = new String();
    IsSinglePlayer = new Boolean();
    Difficulty = new String();

    async AlimentarModel(response) {
        this.Name = response.name
        this.Description = response.description
        this.ReleaseOn = response.releaseOn
        this.IsSinglePlayer = response.isSinglePlayer
        this.Difficulty = response.difficulty
    }
 } 