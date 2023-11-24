module.exports = {
  
  plugins: [

    {

      resolve: 'gatsby-source-graphql',

      options: {

        typeName: 'WPGraphQL',

        fieldName: 'wpgraphql',

        url: 'https://mealswelike.com/graphql',

      }

    }

  ]
}