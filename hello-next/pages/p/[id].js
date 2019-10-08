import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/myLayout';

export default () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
//The markdown has to be to the left of the page for it to work! 
//It does not support hard tab
          source={`
This is my new blog.
The link is [link](/link).
        
### New Title!
        
And Some other words.
        `}
        />
      </div>
      <style jsx global>
        {`
          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  );
};







// Older different code

// import Layout from "../../components/myLayout";
// import fetch from "isomorphic-unfetch";

// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// )

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };

// export default Post;
