const url = "https://jsonplaceholder.typicode.com/post"

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

// get all posts

async function getAllPosts() {
    const response = await fetch(url);

    const data = await response.json();
    
    // escondendo loading
    loadingElement.classList.add("hide");

    // passando por elementos que vieram da requisicao 
    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")
    })
}

getAllPosts();