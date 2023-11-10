import HRbug from 'public/hackerrank_logo-21e2867566.svg'
import { Project } from './ProjectCard'

const projects: Array<Project> = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: HRbug,
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    logo: HRbug,
    start: '2014',
    end: '2019',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    logo: HRbug,
    start: '2011',
    end: '2014',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    logo: HRbug,
    start: '2008',
    end: '2011',
  },
];

export default projects;