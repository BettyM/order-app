import gql from "graphql-tag"
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
})

const sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const getPizzaToppings = (size) => {
  size = Object.keys(sizes).find(x => sizes[x].includes(size.name))

  return client.query({
    query: gql`
      {
        pizzaSizeByName(name: ${size}) {
          maxToppings
          toppings {
            topping {
              name
              price
            }
            defaultSelected
          }
        }
      }
    `
  }).then(response => response.data.pizzaSizeByName)
}

export const getPizzaSizes = () => {
  return client.query({
    query: gql`
      {
        pizzaSizes {
          name
          maxToppings
          basePrice
        }
      }
    `
  }).then(response => response.data.pizzaSizes)
}
