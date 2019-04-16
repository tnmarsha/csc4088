<template>
<div class="container">
  <div class="content">
    <h1>Yellow Box Movies</h1>
    <div class="row">
    <movie-component
            v-for="(movie, index) in movies"
            v-bind="movie"
            :index="index"
            :key="movie.id"
            @view="view"
            @rentals="rentals"
    ></movie-component>
    </div>
  </div>
</div>
</template>

<script>
    function Movie ({ id, title, rating, length, onDVD, onBluRay, updated_at}) {
        this.id = parseInt(id)
        this.title = title
        this.rating = rating
        this.length = length
        this.onDVD = onDVD
        this.onBluRay = onBluRay
        this.updated_at = updated_at
    }
    /* Go get the code for the customer-component tag that is in the template */
    import MovieComponent from '@/components/MovieComponent.vue'
    export default {
        data () {
            return {
                movies: []
            }
        },
        methods: {
            read () {
                this.movies = []
                // had to use someone else web link for the code to work
                window.axios.get('https://rckennell.com/api/movies').then(({ data }) => {
                    data.forEach(movie => {
                        this.movies.push(new Movie (movie))
                    })
                })
            },
            view (id) {
            },
            rentals (id) {
            }
        },
        components: {
            MovieComponent
        },
        created () {
            this.read()
        }
    }
</script>
<style>
  h1{
    text-decoration: underline;
  }
</style>