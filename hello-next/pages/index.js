import Layout from "../components/myLayout";
import Link from "next/link";

const Postlink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <Postlink id="Hello-Next.js" />
        <Postlink id="Deploy apps and stuff like that" />
        <Postlink id="Learn-Next.js" />
      </ul>
    </Layout>
  );
}
