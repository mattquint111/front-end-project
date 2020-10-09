const apiKey = "0310c1a97f001b72c2466fdfc9e4f305"
const testUrl = "https://api.themoviedb.org/3/movie/76341?api_key="
const searchMovieBaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`


const movieSearchInput = document.getElementById("movie-search-input")
const movieSearchButton = document.getElementById("movie-search-button")

movieSearchButton.addEventListener('click', function() {
    let movieInput = movieSearchInput.value
    
    let searchMovieArray = searchForMovie(movieInput).results
    searchMovieArray.forEach(movie => {
        console.log(movie.original_title)
    })
})

// returns movie array from search
function searchForMovie(movieTitle) {
    fetch(searchMovieBaseUrl+movieTitle)
        .then(response => response.json())
        .then(data => console.log(data))
}

