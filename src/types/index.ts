export interface IProjectQuickView {
  id: string
  name: string
  url: string
  repo: string
  thumbnailName: string
  thumbnailPosition?: string
}

export interface IProject {
  id: string
  type: string
  name: string
  description: string
  url: string
  repo: string
  date: string
  slug: string
  imgName: string
  thumbnailName: string
  thumbnailPosition?: string
  tags: [string]
  tech: [string]
}
