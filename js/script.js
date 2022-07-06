const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movieList = document.querySelector('.promo_interective-list')

movieDB.movies.sort()


function createMovieList() {
    movieList.innerHTML = ''

    movieDB.movies.forEach((film) => {
        movieList.innerHTML += `   
            <li class="promo__interactive-item">${film}
                <div class="delete"></div>
             </li>  
        `
    })
}

createMovieList()

const addFom = document.querySelector('.add')
const addInput = document.querySelector('.adding_input')

addFom.addEventListener('submit', (event) => {
    event.preventDefault()

    const newFilm = addInput.value 

    movieDB.movies.push(newFilm)
    movieDB.movies.sort()

    createMovieList()
})