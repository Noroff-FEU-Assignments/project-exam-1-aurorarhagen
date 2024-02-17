export async function blogPost() {}
const url = document.location;

const search = url.search;

const parameter = new URLSearchParams(search);

async function fetchBlogPost(id) {
    if (!id) throw new Error('Unable to load product. Please try again later.')
    const url = `https://www.project-exam-1-aurorarhagen.com/wp-json/wp/v2/posts/${id}`; 
    try {
        const response = await fetch(url);
         if (response.ok) {
            const data = await response.json();

            return data;
         }  else {
            throw new Error('Unable to connect to network'); 
         }
    }   catch (error) {
       
    }
}


async function renderBlogPost() {
    const id = parameter.get('id');
    const blogData = await fetchBlogPost(id);
    const blogPostContent = document.getElementById("blog-content")
    blogPostContent.innerHTML = `
                                    <h1>${blogData.title.rendered}</h1>
                                    <h4>Published: ${blogData.date}</h4>
                                    <p>${blogData.content.rendered}</p> 
    
                                `
}


renderBlogPost();