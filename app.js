const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn');
const deleteBtn = document.querySelector('#delete-btn');
const gifDiv = document.querySelector('#gif-div');

async function getGif(term) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    appendGif(response.data);
}

function appendGif(data) {
    gifDiv.append(makeNewGifDiv(data.data[0].images.original.url))
}

function makeNewGifDiv(src) {
    const newImg = document.createElement('img');
    newImg.src = src
    return newImg;
}

function handleSearch(e) {
    e.preventDefault();
    getGif(searchInput.value);
    searchInput.value = ''
}

function clearGifs() {
    gifDiv.innerHTML = '';
}

searchBtn.addEventListener('click', handleSearch);
deleteBtn.addEventListener('click', clearGifs);