export interface ListItem {
  title?: string
  company?: string
  icon?: string
  date?: string
  location?: string
}

export interface ListItemConstants {
  [key: string]: ListItem[]
}

const List: ListItemConstants = {}
