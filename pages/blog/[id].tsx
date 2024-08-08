import { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params?.id?.length) {
    throw new Error("idの値が不正です");
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.id}`
  );
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}

interface Props {
  blog: {
    // useId:number,
    id: number;
    title: string;
    body: string;
  };
}

export default function Page({ blog }: Props) {
  return (
    <dl>
      <dt>id</dt>
      <dd>{blog.id}</dd>
      <dt>title</dt>
      <dd>{blog.title}</dd>
      <dt>body</dt>
      <dd>{blog.body}</dd>
    </dl>
  );
}
