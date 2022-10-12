let users = new Map();
users.set("Russia", "RUB");
users.set("USA", "USD");
users.set("Europa", "EUR");
users.set("Belorus", "BYN");
users.set("China", "CNY");


for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}