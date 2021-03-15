const Team = require('./team');
const Game = require('./game');
const Bracket = require('./bracket');
const Round = require('./round');
const teamList = require('./2021');

const makeRoundOne = (list) => {
    const round = new Round();
    list.forEach(item => {
        const teamA = new Team(item[0][0], item[0][1]);
        const teamB = new Team(item[1][0], item[1][1]);
        const game = new Game(teamA, teamB);
        round.addGame(game);
    });

    return round;
}

const bracket = new Bracket(makeRoundOne(teamList));
bracket.generatePicks();
bracket.print();