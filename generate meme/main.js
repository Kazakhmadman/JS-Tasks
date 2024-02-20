async function getResponse() {
    
        const response = await fetch('https://meme-api.com/gimme/wholesomememes');
        const data = await response.json();
        document.getElementById('mem').src = data.url;
    
}

getResponse()



/* async function getResponse() {
    let response = await fetch('https://meme-api.com/gimme/wholesomememes')
    let content = await response.json()

    let list = document.querySelector('.wrapper')

    list.innerHTML += 
        `<div class ="center_wrapper">
            <h2>${content.title} </h2>
                <div class="pic">
                    <img src="${content.url}" alt="meme" width="600">
                </div>
         </div>`
}

getResponse()
 */