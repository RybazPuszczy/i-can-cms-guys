interface SiteMapNode {
  name: string
  path: string
  nested?: SiteMapNode[]
}

export type SiteMap = SiteMapNode[]
