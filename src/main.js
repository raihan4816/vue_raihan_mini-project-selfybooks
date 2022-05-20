import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import ws from "ws";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "https://23-query-task.hasura.app/v1/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://23-query-task.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    inactivityTimeout: 30000,
    lazy: true,
    webSocketImpl: ws,
  },
  onError(err) {
    console.log(err);
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

new Vue({
  router,
  store,
  axios,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
