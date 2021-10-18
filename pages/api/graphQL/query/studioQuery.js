export default `query StudioQuery {
    designers{
      id
      name
      description
      quote
      title
      avatar {
        url
        width
        height
      }
    }
  }`;
