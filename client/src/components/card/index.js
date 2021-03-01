export default function Card({ children, ...props }) {
  return (
    <div className="bg-gray-900 border-2 border-black p-12">{children}</div>
  );
}
