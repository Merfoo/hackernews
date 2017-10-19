import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App'
// import router from './router'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import 'tachyons'

Vue.config.productionTip = false

const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8xuqgn30a6k0164xb0pu8u3'
})

const apolloClient = new ApolloClient({
  networkInterface,
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadinKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  // router,
  render: h => h(App)
})
