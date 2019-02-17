import React, { Component } from 'react'
import { ApolloProvider } from "react-apollo"
import ApolloClient from 'apollo-boost'
import './App.css'
import PizzaApp from './components'

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <PizzaApp />
        </div>
      </ApolloProvider>
    );
  }
}

export default App
