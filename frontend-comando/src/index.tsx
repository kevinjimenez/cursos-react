import ReactDOM from 'react-dom';
import App from './App/App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context';

// inicializo el aplllo cliente para grapql
const client = new ApolloClient({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
})



ReactDOM.render(
  // ts-ignore
  <Context.Provider>
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root')
);

