// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(users=>{
    for(const item of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerText = `${item.id}, ${item.name}`;
        container.append(userDiv);

        const a = document.createElement('a');
        a.innerText = 'User info';
        a.href = `details.html?date=${item.id}`
        userDiv.append(a);
    }
});