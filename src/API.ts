/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  type: string,
  name: string,
  description: string,
  url: string,
  repo: string,
  date: string,
  slug: string,
  imgName: string,
  thumbnailName: string,
  thumbnailPosition?: string | null,
  tags: Array< string | null >,
  tech: Array< string | null >,
};

export type UpdateProjectInput = {
  id: string,
  type?: string | null,
  name?: string | null,
  description?: string | null,
  url?: string | null,
  repo?: string | null,
  date?: string | null,
  slug?: string | null,
  imgName?: string | null,
  thumbnailName?: string | null,
  thumbnailPosition?: string | null,
  tags?: Array< string | null > | null,
  tech?: Array< string | null > | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDFilterInput | null,
  type?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  url?: ModelStringFilterInput | null,
  repo?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  slug?: ModelStringFilterInput | null,
  imgName?: ModelStringFilterInput | null,
  thumbnailName?: ModelStringFilterInput | null,
  thumbnailPosition?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  tech?: ModelStringFilterInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      type: string,
      name: string,
      description: string,
      url: string,
      repo: string,
      date: string,
      slug: string,
      imgName: string,
      thumbnailName: string,
      thumbnailPosition: string | null,
      tags: Array< string | null >,
      tech: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    type: string,
    name: string,
    description: string,
    url: string,
    repo: string,
    date: string,
    slug: string,
    imgName: string,
    thumbnailName: string,
    thumbnailPosition: string | null,
    tags: Array< string | null >,
    tech: Array< string | null >,
  } | null,
};
