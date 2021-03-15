const Round = require('./round');
const Game = require('./game');

class Bracket {
    constructor(roundOne) {
        this.rounds = [roundOne];
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1];
    }

    get complete() {
        return this.currentRound.games.length === 1;
    }

    advance() {
        const currentRound = this.currentRound;
        const newRound = new Round();

        for (let i = 0; i < currentRound.games.length - 1; i += 2) {
            newRound.addGame(new Game(currentRound.games[i].winner, currentRound.games[i + 1].winner));
        }

        this.rounds.push(newRound);
    }

    generatePicks() {
        this.currentRound.processRound();
        while(!this.complete) {
            this.advance();
            this.currentRound.processRound();
        }
    }

    print() {
        this.rounds.forEach((round, idx) => {
            console.log(`Round ${idx + 1}`);
            round.print();
            console.log('\n');
        });
    }
}

module.exports = Bracket;