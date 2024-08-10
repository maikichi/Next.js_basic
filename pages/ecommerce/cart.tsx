export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/posts");
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
          <th>ID</th>&nbsp;
          <th>Title</th>&nbsp;
          <th>Views</th>&nbsp;
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>&nbsp;
            <td>{item.title}</td>&nbsp;
            <td>{item.views}</td>&nbsp;
          </tr>
        ))}
      </tbody>
    </table>
  );
}
