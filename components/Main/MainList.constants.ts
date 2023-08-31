export interface MainItemList {
  title?: string
  company?: string
  icon?: string
  date?: string
  location?: string
}

export interface MainItem {
  vertical: boolean
  mainItemList: Array<MainItemList>
}

export interface ListItemConstants {
  [key: string]: MainItem[]
}

const mainLists: ListItemConstants = {
  experience: [
    {
      vertical: true,
      mainItemList: [
        {
          title: "VR Designer",
          icon: "icon",
          company: "Meta",
          date: "Present",
          location:
            "Menlo Park, Calinfornia",
        },
        {
          title: "Product Designer",
          icon: "icon",
          company: "Apple",
          date: "Jul 20 - Jan 2022",
          location:
            "Cupertino, California",
        },
        {
          title: "UX Designer",
          icon: "icon",
          company: "Tesla",
          date: "Oct 2015 - Mar 2022",
          location: "Austin, Texas",
        },
        {
          title:
            "Design System Architect",
          icon: "icon",
          company: "Google",
          date: "Sep 2014 - Aug 2022",
          location: "Austin, Texas",
        },
        {
          title:
            "Senior Product Design",
          icon: "icon",
          company: "Vectornator",
          date: "Sep 2010 - Jul 2013",
          location: "Berlin, Germany",
        },
      ],
    },
  ],
  skills: [
    {
      vertical: true,
      mainItemList: [
        {
          title: "VR Designer",
          icon: "icon",
          company: "Meta",
          date: "Present",
          location:
            "Menlo Park, Calinfornia",
        },
      ],
    },
  ],
  education: [
    {
      vertical: true,
      mainItemList: [
        {
          title: "VR Designer",
          icon: "icon",
          company: "Meta",
          date: "Present",
          location:
            "Menlo Park, Calinfornia",
        },
      ],
    },
  ],
  latest_projects: [
    {
      vertical: true,
      mainItemList: [
        {
          title: "VR Designer",
          icon: "icon",
          company: "Meta",
          date: "Present",
          location:
            "Menlo Park, Calinfornia",
        },
      ],
    },
  ],
  tools: [
    {
      vertical: true,
      mainItemList: [
        {
          title: "VR Designer",
          icon: "icon",
          company: "Meta",
          date: "Present",
          location:
            "Menlo Park, Calinfornia",
        },
      ],
    },
  ],
}

export default mainLists
