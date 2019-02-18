import React, { Component } from 'react'
import { ApolloProvider } from "react-apollo"
import ApolloClient from 'apollo-boost'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers'
import './App.css'
import PizzaApp from './components/PizzaOrder/container'

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
})

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store} render>
          <div className="App">
            <PizzaApp />
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App
