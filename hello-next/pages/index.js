import Layout from "../components/myLayout";
import Link from "next/link";

const Postlink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <Postlink title="Hello Next.js" />
        <Postlink title="Learn Next.js and that jazz" />
        <Postlink title="Deploy apps and stuff like that" />
      </ul>
    </Layout>
  );
}
