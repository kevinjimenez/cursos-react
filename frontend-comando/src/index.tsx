import ReactDOM from 'react-dom';
import App from './App/App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context';

// inicializo el aplllo cliente para grapql
const client = new ApolloClient({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql',
  request: (operation: any)=>{
    const token = sessionStorage.getItem('token')
    console.log(token, 'hahahaha');
    
    const authorization = token ? `Bearer ${token}` : '';
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error: any)=>{
    const {networkError} = error
    if(networkError && networkError.result.code === 'invalid_token'){
      sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
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

