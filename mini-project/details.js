const url = new URL(location.href);
const id = url.searchParams.get('date');

const container = document.createElement('div');
container.classList.add('container')
document.body.append(container);

const singeleUserPage = document.createElement('div');
singeleUserPage.classList.add('single-page', 'flex')
container.append(singeleUserPage);



fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(response=>response.json())
.then(value=>{
   
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');
    singeleUserPage.append(userDiv);  
    for (const item in value) {
        const userParagraph = document.createElement('p');
        if (typeof value[item] !== 'object') {
            userParagraph.innerText = `${item} ${value[item]}`;
        }else{
            userParagraph.innerText = `${item}`;
            for (const key in value[item]) {
                const userInnerDiv = document.createElement('p');
                if (typeof value[item][key] !== 'object') {
                    userInnerDiv.innerText = `${key} --- ${value[item][key]}`;
                }else{
                    userInnerDiv.innerText = `${key} : `;
                    for (const element in value[item][key]) {
                        const htmlDivElement = document.createElement('p');
                        if(typeof value[item][key][element] !== 'object' ){
                            htmlDivElement.innerText = `${element} --- ${value[item][key][element]}`
                        }
                        userInnerDiv.append(htmlDivElement);
                    }
                }
                userParagraph.append(userInnerDiv)
            }
        }
        userDiv.append(userParagraph)
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}/comments`)
        .then(response=>response.json())
        .then(comments=>{
            const userComments = document.createElement('div');
            userComments.classList.add('user-comments');
            singeleUserPage.append(userComments);  

            const h4 = document.createElement('h4');
            h4.innerText = 'user comments';
            userComments.append(h4);

            for(const item of comments){
                    const userComment = document.createElement('p');
                    userComment.classList.add('comment');
                    userComment.innerText = `${item.body}`;
                    userComments.append(userComment);
            }
        });
});

