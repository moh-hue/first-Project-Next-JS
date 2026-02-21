import Link from "next/link";

export default async function Data() {

  const response = await fetch("https://dummyjson.com/posts", {
    next: {
      revalidate: 120,
    },
  });

  const data = await response.json();

  const postjsx = data.posts.map((post) => {
    return (
      <Link
        key={post.id}
        href={`/posts/${post.id}`}
        style={{ width: "70%" }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>
      </Link>
    );
  });

  return <div>{postjsx}</div>;
}