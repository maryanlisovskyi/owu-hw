const container = document.createElement('div');
const usersDiv = document.createElement('div');
container.classList.add('container');
usersDiv.classList.add('users','flex');
document.body.append(container);
container.append(usersDiv)
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(users=>{
    for(const item of users){
        const userContent = document.createElement('div');
        userContent.classList.add('user');
        userContent.innerHTML = `<h3>${item.id}. ${item.name}</h3>`;
        usersDiv.append(userContent);

        const a = document.createElement('a');
        a.classList.add('btn')
        a.innerText = 'User info';
        a.href = `details.html?date=${item.id}`
        userContent.append(a);
    }
});