import Head from 'next/head';

const SEOMeta = (props) => {
  const { title, description, slug, imgUrl } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='title'
        content={title}
      />
      <meta
        name='description'
        content={description}
      />
      <link
        rel='canonical'
        href={`https://visainterviewai.com/${slug}`}
      />

      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:url'
        content={`https://visainterviewai.com/${slug}`}
      />
      <meta
        property='og:title'
        content={title}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:image'
        content={imgUrl || 'https://visainterviewai.com/cover.png'}
      />

      <meta
        property='twitter:card'
        content='summary_large_image'
      />
      <meta
        property='twitter:url'
        content={`https://visainterviewai.com/${slug}`}
      />
      <meta
        property='twitter:title'
        content={title}
      />
      <meta
        property='twitter:description'
        content={description}
      />
      <meta
        property='twitter:image'
        content={imgUrl || 'https://visainterviewai.com/cover.png'}
      />
      <link
        rel='icon'
        href='https://visainterviewai.com/favicon.svg'
      />
    </Head>
  );
};

export default SEOMeta;
