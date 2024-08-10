import { NextApiRequest, NextApiResponse } from "next";

let fruits = [
  "りんご",
  "バナナ",
  "みかん",
  "ぶどう",
  "さくらんぼ",
  "もも",
  "いちご",
  "すいか",
  "メロン",
  "パイナップル",
];

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<string[]>
// ) {
//   res.status(200).json(fruits);
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // クエリパラメーター 'q' を取得し、存在しない場合は空文字列を使用
  const query = (req.query.q as string) || "";
  if (query) {
    // クエリパラメーターが存在する場合にフィルタリング
    const filteredFruits = fruits.filter((fruit) => fruit.includes(query));
    // フィルタリング後のフルーツリストを返す
    res.status(200).json(filteredFruits);
  } else {
    res.status(200).json(fruits);
  }
}
