export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog")
  const posts: Array<{ id: string; title: string }> = await data.json()

  return (
    <div className="p-4">
      <h1 className="mb-4 text-4xl">Hello from nextjs root page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
