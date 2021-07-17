export interface BlogThumb {
  id: string
  frontmatter: Thumbnail
}
export interface BlogDet {
  frontmatter: Details
  html: string
}

type Thumbnail = {
  title: string
  slug: string
  mainImage: any
  description: string
  category: string
}

type Details = {
  title: string
  mainImage: any
  subCategories: string[]
  date: Date
}
