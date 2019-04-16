// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    type
    name
    description
    url
    repo
    date
    slug
    imgName
    thumbnailName
    thumbnailPosition
    tags
    tech
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      name
      description
      url
      repo
      date
      slug
      imgName
      thumbnailName
      thumbnailPosition
      tags
      tech
    }
    nextToken
  }
}
`;
