<template>
    <div class="about pt-4 pb-3">
        <h1>Yellow Box Customers</h1>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <customer-component
                    v-for="(customer, index) in customers"
                    v-bind="customer"
                    :index="index"
                    :key="customer.id"
                    @view="view"
                    @rentals="rentals"
            ></customer-component>
            </tbody>
        </table>
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
  /* Go get the code for the customer-component tag that is in the template */
  import CustomerComponent from '@/components/CustomerComponent.vue'
  export default {
    data () {
      return {
        customers: []
      }
    },
    methods: {
      read () {
        this.customers = []
        window.axios.get('https://unknownseller.net/api/customers').then(({ data }) => {
          data.forEach(customer => {
                this.customers.push(new Customer(customer))
            })
        })
      },
      view (id) {
      },
      rentals (id) {
      }
    },
    components: {
      CustomerComponent
    },
    created () {
      this.read()
    }
  }
</script>

<style>
</style>