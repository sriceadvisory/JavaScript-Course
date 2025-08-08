'use strict';
const game = {
    team1: 'NY Redbull',
    team2: 'Charlotte FC',
    players: [
        [
            'Davis',
            'Peter',
            'Barry',
            'William',
            'Martinez',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandoski',
            'Kimmich',
            'Alaba',

        ],
        [
            'Buri',
            'Schultz',
            'Varun',
            'Pryam',
            'Steve',
            'Fred',
            'Hummel',
            'Martin',
            'Brent',
            'Alshon',
            'Sydney',
        ]
    ]
}
//Creating an array for each of the player listings
const [players1, players2] = game.players
console.log(players1);
console.log(players2);

//using spread to seperate out the first player as the GK and assigning the rest as fieldplayers.
const [gk, ...fieldplayers] = players1
//combining the players using rest
const allplayers = [...players1, ...players2]
//Adding subs onto the team sheet
const teamSheet = [...players1, 'Thiago', 'Coutinho', 'Perisic']
