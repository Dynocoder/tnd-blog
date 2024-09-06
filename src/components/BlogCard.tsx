import { Link } from 'react-router-dom';

// Define the type for the blog object
interface Blog {
  id: number;
  title: string;
  summary: string;
}

// Define the type for the BlogCard component props
interface BlogCardProps {
  blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-700">{blog.summary}</p>
      <Link
        to={`/blog/${blog.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
