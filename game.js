class Game {
    constructor(teamA, teamB) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.winner = null;
        this.loser = null;
    }

    get hasBeenPlayed() {
        return !!this.winner && !!this.loser;
    }

    simulate() {
        const chanceAWin = (8.5 + (this.teamA.seed - this.teamB.seed) / 2) / 17;
        const outcome = Math.random();
        if (outcome > chanceAWin) {
            this.winner = this.teamA;
            this.loser = this.teamB;
        } else {
            this.winner = this.teamB;
            this.loser = this.teamA;
        }
    }

    print() {
        if (this.hasBeenPlayed) {
            console.log(`${this.winner.seed} ${this.winner.name} def ${this.loser.seed} ${this.loser.name}`);
        }
    }
}

module.exports = Game;