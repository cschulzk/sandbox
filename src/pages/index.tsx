// import { type ArticleWithSlug, getAllArticles } from '@/sandbox-lib/articles'
import MainLayout from '../layout'
import { Container } from '../../sandbox-lib/general/containers/MainContainer'
import { GitHubIcon, LinkedInIcon, HackerRankIcon } from '../data/icons/socialIcons'
import Photos from '@/components/homePage/photos'
import ProjectsCard from '@/components/homePage/projectsCard'

export default function Home() {
  // const articles = (await getAllArticles()).slice(0, 4)

  return (
    <MainLayout>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, data engineer, and outdoorsman
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Christoph, a software engineer based in Birmingham, Alabama. 
            I build applications for...
          </p>
          <div className="mt-6 flex gap-6">
            <GitHubIcon/>
            <LinkedInIcon/>
            <HackerRankIcon/>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <ProjectsCard />
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}
