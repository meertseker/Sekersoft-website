import { Helmet } from 'react-helmet-async'
import type { PageMeta, StructuredData } from '../config/pageMeta'
import { siteConfig } from '../config/site'

const buildAbsoluteUrl = (path?: string) => {
  if (!path) return siteConfig.url
  return path.startsWith('http') ? path : `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

const buildImageUrl = (image?: string) => {
  if (!image) return buildAbsoluteUrl(siteConfig.metadata.ogImage)
  return image.startsWith('http') ? image : buildAbsoluteUrl(image)
}

interface SeoProps extends PageMeta {
  path?: string
  structuredData?: StructuredData
}

export const Seo = ({ title, description, keywords, image, path, structuredData }: SeoProps) => {
  const pageTitle = title || siteConfig.metadata.defaultTitle
  const pageDescription = description || siteConfig.metadata.defaultDescription
  const canonical = buildAbsoluteUrl(path)
  const imageUrl = buildImageUrl(image)
  const keywordsContent = (keywords && keywords.length > 0 ? keywords : siteConfig.metadata.keywords).join(', ')

  const jsonLdArray = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywordsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdArray.map((entry, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Helmet>
  )
}

export default Seo

