import Head from 'next/head';

function NextHead({
  title, description,
  ogTitle, ogDescription,
  ogImage = 'https://example.com/website-image.png',
  ogUrl,
  charset, keywords, author,
}) {
  return (
    <Head>
      {title && (<title>{title}</title>)}
      {description && (<meta name="description" key="desc" content={description} />)}

      {ogTitle && (<meta property="og:title" content={ogTitle} />)}
      {ogDescription && (<meta property="og:description" content={ogDescription} />)}
      {ogImage && (<meta property="og:image" content={ogImage} />)}
      <meta property="og:type" content="website" />
      {ogUrl && (<meta property="og:url" content={ogUrl} />)}

      {charset && (<meta charset={charset} />)}
      {keywords && (<meta name="keywords" content={keywords} />)}
      {author && (<meta name="author" content={author} />)}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default NextHead;
