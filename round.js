class Round {
    constructor() {
        this.games = [];
    }

    addGame(game) {        
        this.games.push(game);
    }

    processRound() {
        this.games.forEach(game => {
            game.simulate();
        });
    }

    print() {
        this.games.forEach(game => {
            game.print();
        });
    }
}

module.exports = Round;