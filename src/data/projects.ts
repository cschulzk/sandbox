import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    key: 'dtk',
    title: "DataToolkit",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: `As the lead engineer for the marketing website of DataToolkit, 
    I was able to build the user login expereince and account feature as well as the payment and licensing flow.
    This project was a satisfying exercise in building an intricate application that is composed of several small moving pieces.
    `
  },
  {
    key: 'cahaba',
    title: "Cahaba Software",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: `While a junior engineer with Cahaba Software Solutions, I was able to build the initial versions of their public website.`
  },
  {
    key: 'weather-api',
    title: "Weather App",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: 'description'
  },
  {
    key: 'movie-guide',
    title: "Movie Guide",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: 'description'
  },
  {
    key: 'math-physics',
    title: "Math App",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: 'description'
  },
  {
    key: 'publications',
    title: "Publications",
    url: (process.env.NEXT_PUBLIC_DTK_LINK ?? '/'),
    description: 'description'
  }
]