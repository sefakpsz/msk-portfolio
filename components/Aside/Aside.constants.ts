export interface AsideItem {
  imageSource: string
  title: string
  description: string
}

export interface AsideConstants {
  [key: string]: AsideItem[]
}

const asides: AsideConstants = {
  contacts: [
    {
      title: "Email",
      description:
        "m.sefa06@hotmail.com",
      imageSource: "/favicon.ico",
    },
    {
      title: "Website",
      description: "www.mrdoorless.com",
      imageSource: "/favicon.ico",
    },
    {
      title: "Phone",
      description: "(+90) 555 881 1783",
      imageSource: "/favicon.ico",
    },
    {
      title: "Address",
      description: "Istanbul, Turkey",
      imageSource: "/favicon.ico",
    },
  ],
  socials: [
    {
      title: "Instagram",
      description: "@sefakpsz",
      imageSource: "/favicon.ico",
    },
    {
      title: "Github",
      description: "@sefakpsz",
      imageSource: "/favicon.ico",
    },
    {
      title: "LinkedIn",
      description:
        "muhammet-sefa-kapisiz-26b136143",
      imageSource: "/favicon.ico",
    },
  ],
  languages: [
    {
      title: "English",
      description: "Upper Intermediate",
      imageSource: "/favicon.ico",
    },
    {
      title: "Turkish",
      description: "Native",
      imageSource: "/favicon.ico",
    },
  ],
}

export default asides
