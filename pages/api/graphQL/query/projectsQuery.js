export default `query ProjectsQuery {
    projects{
        id
        project_id
        Title
        Description
        gallery{
          id
          url
        }
    }
}`;
