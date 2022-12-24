// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const id = url.searchParams.get('date');

const container = document.createElement('div');
container.classList.add('container')
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(response=>response.json())
.then(value=>{
    for (const item in value) {
        const userDiv = document.createElement('div');
        if (typeof value[item] !== 'object') {
            userDiv.innerText = `${item} ${value[item]}`;
        }else{
            userDiv.innerText = `${item}`;
            for (const key in value[item]) {
                const userInnerDiv = document.createElement('div');
                if (typeof value[item][key] !== 'object') {
                    userInnerDiv.innerText = `${key} --- ${value[item][key]}`;
                }else{
                    userInnerDiv.innerText = `${key} : `;
                    for (const element in value[item][key]) {
                        const htmlDivElement = document.createElement('div');
                        if(typeof value[item][key][element] !== 'object' ){
                            htmlDivElement.innerText = `${element} --- ${value[item][key][element]}`
                        }
                        userInnerDiv.append(htmlDivElement);
                    }
                }
                userDiv.append(userInnerDiv)
            }
        }
        container.append(userDiv)
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}/comments`)
        .then(response=>response.json())
        .then(comments=>{
            const h4 = document.createElement('h4');
            h4.innerText = 'user comments';
            container.append(h4);
            for(const item of comments){
                    const userComment = document.createElement('p');
                    userComment.classList.add('comment');
                    userComment.innerText = `${item.body}`;
                    container.append(userComment);
            }
        });
});

