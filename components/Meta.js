import Head from 'next/head';


function Meta({title, description, keywords}) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps={
    title: "Kings NEWS",
    description: "Build website with Nextjs",
    keywords: "Web programming, kings, news, development"
}

export default Meta;
