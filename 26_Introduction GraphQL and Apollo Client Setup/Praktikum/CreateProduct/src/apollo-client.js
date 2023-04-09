import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new  ApolloClient({
    uri: 'https://helped-mackerel-97.hasura.app/v1/graphql', //base url API
    cache: new InMemoryCache, //setting menambahkan cache
    headers:{
        'x-hasura-admin-secret': 'Xw894b11M5rwnNU2y8fHF0Nw1dU59CYTgO4DXY8EL6stFXY6BbZKlbxd5ZkpuC7b'

    }
})

export default client