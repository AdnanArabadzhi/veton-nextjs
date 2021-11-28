export default `query SelectionsQuery {
    products{
        id
        product_id
        Title
        Description
        gallery{
            id
            url
            }
        }
  }`;
