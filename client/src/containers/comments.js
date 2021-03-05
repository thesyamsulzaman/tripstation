export function CommentsContainer({ children }) {
  return (
    <div className="mt-1 py-2">
      <h1 className="text-xl font-semibold">Comments (4)</h1>
      <div className="comments">{children}</div>
    </div>
  );
}
