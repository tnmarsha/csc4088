<template>
    <div class="pt-4 pb-3">
        <h3>Movie Details</h3>
        <div class="card" style="width: 25rem">
            <img class="card-body">
                <img :src="this.imageUrl" class="thumbnail">
                <h5 class="card-title">{{movie.title}}</h5>
                <p class="card-text">Description: {{ movie.description }}</p>
                <p class="card-text">Rated: {{ movie.rating }}</p>
                <p class="card-text">Length: {{ movie.length }} minutes</p>
                <p class="card-text">Available on DVD: {{ movie.onDVD }}</p>
                <p class="card-text">Available on BluRay: {{ movie.onBluRay }}</p>
            </div>
        </div>
    </div>
</template>
<script>
  function Movie ({ id, title, description, rating, length, onDVD, onBluRay }) {
    this.id = parseInt(id)
    this.title = title
    this.description = description
    this.rating = rating
    this.length = length
    this.onDVD = onDVD
    this.onBluRay = onBluRay
  }
  export default {
    data () {
      return {
        id: null,
        movie: Object
      }
    },
    methods: {
      read () {
      // had to use someone else web link for the code to work
        let url = 'https://rckennell.com/api/movies/' + this.id
        window.axios.get(url).then(({ data }) => {
          this.movie = data;
        })
      }
    },
    computed: {
        /* Build URL for image */
        imageUrl: function () {
            return "http://codeflare.tech/images/movie_" + this.movie.id + ".jpg";
        }
    },
    components: {
    },
    created () {
      this.id = this.$route.params.userId
      this.read()
    }
  }
</script>

<style>
    .card {
        margin: auto;
    }
    .card-body {
        text-align: left;
    }
</style>