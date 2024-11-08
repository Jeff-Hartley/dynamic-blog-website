// Variables for the input and output
const newPostTitle = document.getElementById('newPostTitle');
const newPostContent = document.getElementById('newPostContent');
const displayPostTitle = document.getElementById('displayPostTitle');
const displayPostContent = document.getElementById('displayPostContent');
const editPostTitle = document.getElementById('editPostTitle');
const editPostContent = document.getElementById('editPostContent');
// Variables for the buttons
const submitPostBtn = document.getElementById('submitBtn');
const clearPostBtn = document.getElementById('clearBtn');
const editBtn = document.getElementById('editBtn');
const subEdit = document.getElementById('subEdit')

//Event listeners for the buttons, if statements to check to see if they exist. 
if (submitPostBtn) {
    submitPostBtn.addEventListener('click', saveData);
}

if (clearPostBtn) {
    clearPostBtn.addEventListener('click', clearData);
}

if (editBtn) {
    editBtn.addEventListener('click', editPost);
}

if (subEdit) {
    subEdit.addEventListener('click', saveData);
}

// Function to save data to localStorage.
function saveData() {  
    const pTitle = editPostTitle.value;
    const pContent = editPostContent.value;
    
    if (pTitle && pContent) {
    
        // Setters to save the post title and content to localStorage.
    localStorage.setItem('pTitle', pTitle);
    localStorage.setItem('pContent', pContent);
    
    //Using the function to display the saved blog
    displaySavedBlog();
    
    //will take you to the displayed post once the post is saved
    window.location.href = 'post.html';
    }
}

function displaySavedBlog() {
    const savedBlogTitle = localStorage.getItem('pTitle');
    const savedBlogContent = localStorage.getItem('pContent');
    
    if (savedBlogTitle && savedBlogContent) {
        displayPostTitle.textContent = savedBlogTitle;
        displayPostContent.textContent = savedBlogContent;
    }
}

function editPost() {
    // Used to retrieve the saved title and content.
    const savedBlogTitle = localStorage.getItem('pTitle');
    const savedBlogContent = localStorage.getItem('pContent');
    
    if (savedBlogTitle && savedBlogContent) {
        // Will fill the form with the exisiting post title and content respectively
        editPostTitle.value = savedBlogTitle;
        editPostContent.value = savedBlogContent;
    }

}

function clearData() {
    localStorage.clear(); // Clear all data in localStorage
    displayPostTitle.textContent = '';  // Clear the display title
    displayPostContent.textContent = '';  // Clear the display content
}

window.onload = displaySavedBlog;


