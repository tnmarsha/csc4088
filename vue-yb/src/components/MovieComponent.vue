<template>
    <div class="card" style="width: 21rem">
        <img :src="this.imageUrl" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"> {{ title }} </h5>
            <h6 class="card-text"> Movie Rated: {{ rating }} </h6>
        </div>
        <div class="card-links">
            <button class="btn btn-sm btn-success"><router-link :to="'/movie-details/' + this.id">Details</router-link></button>
            <button class="btn btn-sm btn-dark"><router-link :to="'/movie-details/' + this.id + '/rented'">Rented By?</router-link></button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {}
    },
    methods: {
      view () {
        // this.$emit('view', this.id);
        console.log('Component Viewing id:' + this.id)
        // this.$router.push({ name: 'customer-details', params: { id: 3 } })
        let myRoute = '/movie-details/3';
        this.$router.push(myRoute);
      },
      rentals () {
        this.$emit('rentals', this.id);
      }
    },
    computed:{
        /* Build URL for image */
        imageUrl: function(){
            return   "http://rckennell.com/images/movie_" + this.id + ".jpg";
        },
    },
    props: ['id', 'title', 'rating', 'length', 'onDVD', 'onBluRay']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .card{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .card-title{
        text-align: center;
    }
    .card-text{
        text-align: center;
    }
    .card-links{
        padding-bottom: 1rem;
    }
    a{
        color: #ffffff;
    }
</style>