const userName = 'Granny';

console.log(typeof userName); // string

type UserName = typeof userName; // UserName is string


const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Granny', 'Nanny']
};

type Settings = typeof settings; 

function loadData(settings: Settings) {
    // ...
}

loadData(settings); // OK