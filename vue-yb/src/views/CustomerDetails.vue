<template>
    <div class="pt-4 pb-3">
        <h3>Customer Details</h3>
        <div class="card" style="width: 50%;">
            <div class="card-body">
                <h5 class="card-title">{{customer.name}} - {{ customer.id }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{this.role}}</h6>
                <p class="card-text">Email: {{ customer.email }}</p>
                <p class="card-text">Last Update: {{ this.updated }}</p>
            </div>
        </div>

    </div>
</template>
<script>
  function Customer ({ id, name, email, isAdmin, updated_at }) {
    this.id = parseInt(id)
    this.name = name
    this.email = email
    this.isAdmin = isAdmin
    this.updated_at = updated_at
  }
  export default {
    data () {
      return {
        id: null,
        customer: Object
      }
    },
    methods: {
      read () {
        let url = 'https://rckennell.com/api/customers/' + this.id
        window.axios.get(url).then(({ data }) => {
          this.customer = data;
        })
      }
    },
    computed: {
      /* using the isAdmin, return a text role */
      role: function () {
            return this.customer.isAdmin ? 'Administrator' : 'Customer';
      },
      /* MAke a pretty date for showing last_update */
      updated: function(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        var today  = new Date(this.customer.updated_at);
        return today.toLocaleString("en-US", options);
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