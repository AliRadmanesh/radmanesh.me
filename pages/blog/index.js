import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/Post";
import { sortByDate } from "../../utils";

const Blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Ali Radmanesh Blog</title>
        <meta
          name="description"
          content="Useful Content about web & mobile development, life, etc...!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blog;
