import Head from 'next/head'

import Markdown from '@/components/Markdown'
import { fetchPostData } from '@/lib/post'

type AboutProps = {
  content: string
}

export default function About({ content }: AboutProps) {
  return (
    <div>
      <Head>
        <title>About me | Daily Oops!</title>
      </Head>

      <Markdown content={content} className="container pt-4 pb-6 px-3" />
    </div>
  )
}

export async function getStaticProps() {
  const content = await fetchPostData(process.env.ABOUT_ME_NOTE_ID!)

  return {
    props: {
      content,
    },
    revalidate: 30,
  }
}
