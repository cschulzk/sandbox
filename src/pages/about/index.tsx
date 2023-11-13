import MainLayout from "@/layout";
import { Container } from "sandbox-lib/general/containers/MainContainer";

// import { type ArticleWithSlug, getAllArticles } from '@/sandbox-lib/articles'
export default function Home() {
  // const articles = (await getAllArticles()).slice(0, 4)

  return (
    <MainLayout>
      <Container className="mt-9">
        About
      </Container>
    </MainLayout>
  )
}
