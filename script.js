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
    subEdit.addEventListener('click', editSaveData);
}

// Function to save data to localStorage.
function saveData() {  
    const pTitle = newPostTitle.value;
    const pContent = newPostContent.value;
    
    //if data is present in variables from both fields, the following code will run
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

function editSaveData() {  
    const pTitle = editPostTitle.value;
    const pContent = editPostContent.value;
    
    //if data is present in variables from both fields, the following code will run
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


//function to display the saved blog info onto the post.html page
function displaySavedBlog() {
    // variables to store from the getters for the post tile and content
    const savedBlogTitle = localStorage.getItem('pTitle');
    const savedBlogContent = localStorage.getItem('pContent');
    
    //if data is present, display title & content
    if (savedBlogTitle && savedBlogContent) {
        displayPostTitle.textContent = savedBlogTitle;
        displayPostContent.textContent = savedBlogContent;
    }
}

//edit post will take the saved localStorage data and load it into the input fields on the post.html page
function editPost() {
    // Used to retrieve the saved title and content.
    const savedBlogTitle = localStorage.getItem('pTitle');
    const savedBlogContent = localStorage.getItem('pContent');
    
    //if data is present in both variables, will fill the input fields using the edit feature.
    if (savedBlogTitle && savedBlogContent) {
        editPostTitle.value = savedBlogTitle;
        editPostContent.value = savedBlogContent;
    }

}

//function will clear all data in localStorage as well as the text content displayed on the post.html page
function clearData() {
    localStorage.clear(); 
    displayPostTitle.textContent = '';  
    displayPostContent.textContent = '';  
}

window.onload = displaySavedBlog;


