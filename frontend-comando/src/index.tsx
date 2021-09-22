import ReactDOM from 'react-dom';
import App from './components/App/App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// inicializo el aplllo cliente para grapql
const client = new ApolloClient({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

