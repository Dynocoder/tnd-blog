import { Link } from 'react-router-dom';

// Define the type for the blog object
interface Blog {
  id: number;
  title: string;
  summary: string;
  date: string; // Assuming the date is a string formatted date
}

// Define the type for the BlogCard component props
interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="block transform hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <h2 className="text-2xl font-bold text-green-400 hover:underline">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-200 my-2">{blog.date}</p>
        {/* Description with a readable height and overflow effect */}
        <p className="text-white overflow-hidden max-h-20 relative">
          {blog.summary}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
