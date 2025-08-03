const user = {
    name: 'Дарья',
    age: 18,
    isAdmin: false,
    
    greet: function(name) {
        return `Hello, ${name}`;
    }
};

const users = [
    {
        name: 'Андрей',
        age: 25,
        isAdmin: false
    },
    {
        name: 'Джон',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Наташа',
        age: 22,
        isAdmin: false
    }
];


let regularUsersCount = 0;


for (let user of users) {
    if (!user.isAdmin) {  
        regularUsersCount++; 
    }
}


console.log(`Количество обычных пользователей: ${regularUsersCount}`);


console.log(user.greet('Дарья')); 