import Head from 'next/head'
import { useRouter } from 'next/router'
import BaseConfig from '@lib/seo.config'

interface Props {
  meta?: {
    title?: string
    description?: string
    image?: string
    keywords?: string[]
  }
}

const Meta = ({ meta }: Props) => {
  const router = useRouter()
  const {
    title,
    description,
    image,
    keywords,
  } = BaseConfig;

  return <Head>
    <meta charSet="UTF-8" />
    <title>{meta?.title || title }</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/Favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/Favicon-16x16.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta content={meta?.description || description} name="description" />
    <meta content={meta?.keywords ? meta?.keywords.join(',') : keywords.join(',')} name="keywords" />
    {/** OpenGraph Metadata */}
    <meta property="og:url" content={`https://coderdiaz.me${router.asPath}`} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={meta?.title || title } />
    <meta property="og:title" content={meta?.title || title } />
    <meta property="og:description" content={meta?.description || description } />
    <meta property="og:image" content={`https://coderdiaz.me${meta?.image || image}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    {/** End OpenGraph Metadata */}
    {/** Twitter Metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@coderdiaz" />
    <meta name="twitter:title" content={meta?.title || title} />
    <meta name="twitter:description" content={meta?.description || description} />
    <meta name="twitter:image" content={`https://coderdiaz.me${meta?.image || image}`} />
    {/** End Twitter Metadata */}
  </Head>
}

export default Meta