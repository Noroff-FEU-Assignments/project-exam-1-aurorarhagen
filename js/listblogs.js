export async function listBlogs() {}
const url = document.location; 

const search = url.search;

const parameter = new URLSearchParams(search); 

const URL ='https://www.project-exam-1-aurorarhagen.com/wp-json/wp/v2/posts';

const testing_function = async(url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            return data;
        }   else {
            throw new Error("Could not load posts. Please try again later.");
        }
    } catch (error) {
        
    }
}

async function renderPosts() {
    const blogData = await testing_function(URL);
    const allPosts = document.querySelector("#all-posts");
    allPosts.innerHTML = ''; 

    blogData.forEach(element => {
        const card = createCard(element);
        allPosts.append(card);
    });
}
function createCard(element) {
    const divElement = document.createElement('div');
    const h2Element = document.createElement('h2');
    const btnElement = document.createElement('button');
    const imageElement = document.createElement('img');
    imageElement.src = element._links;
    divElement.classList.add('card');
    btnElement.classList.add('read-now-btn');
    h2Element.classList.add('card-title');
    divElement.id = element.id;
    divElement.addEventListener ('click', ()=> {
        window.location.href = `./blogpost.html?id=${element.id}`
    })
    h2Element.textContent = element.title.rendered; 
    btnElement.textContent = 'READ NOW';
    divElement.append (imageElement,h2Element,btnElement)
    return divElement;
}

renderPosts()