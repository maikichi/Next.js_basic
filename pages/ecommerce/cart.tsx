// import { GetServerSidePropsContext } from "next";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/posts");
  const cartItem = await res.json();

  return {
    props: {
      cartItems: cartItem,
    },
  };
}

interface Props {
  cartItems: {
    id: string;
    title: string;
    views: number;
  }[];
}

export default function Cart({ cartItems }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
