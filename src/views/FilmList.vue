<template>
    <section>
        <main class="movie-wrapper">
            <MovieCard v-for="(movie, key) in movies" :key="key" :movie="movie"></MovieCard>
        </main>
    </section>
</template>

<script>
import { apiCall } from "@/services/api.service"
import MovieCard from "@/components/MovieCard";

export default {
    name: "FilmList",
    components: { MovieCard },
    data() {
        return {
            movieList: [],
            total_pages: 0,
            loadingMovies: false,
            page: 1,
            listElm: '',
            option2: ''
        }
    },
    computed: {
        getApiUrl () {
            return `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5dae77f03d0a12ab0aef062edacf9398&${this.option2}`
        },
        movies () {
            return this.movieList
        }
    },
    created() {
        this.discoverMovies(false)
    },
    mounted () {
        // this.listElm = document.querySelector('body')
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy () {
        // remove the scroll event listener so that it does not affect any other component
        window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
        scrollListener () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (!this.query && !this.loadingMovies && this.total_pages > this.page) {
                    this.page++
                    this.discoverMovies()
                }
            }
        },
        async discoverMovies (page = true) {
            this.searchList = []
            if (!page) this.page = 1
            this.option2 = `page=${this.page}`
            this.loadingMovies = true
            const data = await apiCall(this.getApiUrl)
            this.total_pages = data.total_pages
            this.loadingMovies = false
            this.movieList = !page ? data.results : [...this.movieList, ...data.results]
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

.movie-wrapper {
    background-color: #628c5a;
    font-family: "Poppins", sans-serif;
    margin: 0;
    min-height: 100vh;
}

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
