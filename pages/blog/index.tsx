export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}

interface ArticleProps {
  articles: {
    id: number;
    title: string;
  }[];
}

export default function Article({ articles }: ArticleProps) {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <dl>
            <dd>{article.id}</dd>
          </dl>
          <dl>
            <dd>{article.title}</dd>
          </dl>
        </div>
      ))}
    </>
  );
}
