import { client } from "../../libs/client";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog " });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog " });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    </main>
  );
}
