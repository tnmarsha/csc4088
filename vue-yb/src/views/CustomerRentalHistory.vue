<template>
    <div class="about pt-4 pb-3">
        <h1>Customer Rentals</h1>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Title</th>
                <th>Rating</th>
                <th>Length (min)</th>
                <th>Type</th>
                <th>Rented</th>
                <th>Returned</th>
            </tr>
            </thead>
            <tbody>
            <movie-rental-component
                    v-for="(rental, index) in rentals"
                    v-bind="rental"
                    :index="index"
                    :key="rental.id"
            ></movie-rental-component>

            </tbody>
        </table>
    </div>
</template>
<script>
    function Rental({id, title, rating, length, pivot}) {
        this.id = parseInt(pivot.id)
        this.title = title
        this.rating = rating
        this.length = length
        this.transaction = pivot
    }
    import MovieRentalComponent from '@/components/MovieRentalComponent.vue'
    export default {
        data() {
            return {
                id: null,
                customer_name: '',
                rentals: []
            }
        },
        methods: {
            read() {
                let url = 'https://unknownseller.net/api/customers/' + this.id + '/rentals'
                window.axios.get(url).then(({data}) => {
                    this.customer_name = data[0].name;
                    console.log(this.customer_name);
                    console.log(data[0]);
                    data[0].rentals.forEach(rental => {
                        console.log(rental.pivot)
                        this.rentals.push(new Rental(rental))
                    })
                })
            }
        },
        components: {
            MovieRentalComponent
        },
        created() {
            this.id = this.$route.params.userId
            this.read()
        }
    }
</script>

<style scoped lang="scss">
    th {
        text-align: left;
    }
</style>