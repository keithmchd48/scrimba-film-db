<template>
    <div class="movie">
        <img :src="posterPath(movie.poster_path)" :alt="movie.title"/>
        <div class="movie-info">
            <h3>{{movie.title}}{{releaseYear(movie.release_date)}}</h3>
            <span :class="{
                'green': movie.vote_average >= 8,
                'orange': movie.vote_average >= 5 && movie.vote_average < 8,
                'red': movie.vote_average < 5}">
                {{movie.vote_average}}
            </span>
        </div>
        <div class="overview">
            <h3>Overview:</h3>
            {{movie.overview}}
        </div>
    </div>
</template>

<script>

export default {
    name: "MovieCard",
    props: {
        movie: {
            type: Object,
            required: false
        }
    },
    methods: {
        posterPath (poster) {
            return `https://image.tmdb.org/t/p/w1280${poster}`
        },
        releaseYear (date) {
            return `(${date.substring(0, 4)})`
        }
    }
}
</script>

<style scoped>
    .movie {
        cursor: pointer;
        background-color: #376956;
        border-radius: 3px;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        position: relative;
        margin: 1rem;
        width: 300px;
    }

    .movie img {
        width: 100%;
    }

    .movie-info {
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem 1rem;
        letter-spacing: 0.5px;
    }

    .movie-info h3 {
        margin: 0;
    }

    .movie-info span {
        background-color: #628c5a;
        border-radius: 3px;
        font-weight: bold;
        padding: 0.25rem 0.5rem;
    }
    .movie-info span.green {
        color: rgb(39, 189, 39);
    }

    .movie-info span.orange {
        color: orange;
    }

    .movie-info span.red {
        color: rgb(189, 42, 42);
    }

    .overview {
        background-color: #fff;
        padding: 2rem;
        position: absolute;
        max-height: 100%;
        overflow: auto;
        left: 0;
        bottom: 0;
        right: 0;
        transform: translateY(101%);
        transition: transform 0.3s ease-in;
    }

    .overview h3 {
        margin-top: 0;
    }

    .movie:hover .overview {
        transform: translateY(0);
    }
</style>
