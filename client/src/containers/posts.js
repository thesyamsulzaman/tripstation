
export function PostsContainer({ children }) {
  return (
    <div className="mt-1 py-2">
      <h1 className="text-xl font-semibold">Popular Posts</h1>
      <div className="posts">{children}</div>
    </div>
  );
}
