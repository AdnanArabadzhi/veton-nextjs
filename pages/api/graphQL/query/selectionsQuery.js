export default `query SelectionsQuery {
    products{
        id
        product_id
        Title
        Description
        price
        gallery{
            id
            url
            }
        }
  }`;
