import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();

  // Dummy blog detail data (replace with dynamic data later)
  const blog = {
    title: `Blog Title ${id}`,
    content: `Detailed content for Blog ${id}. This content is currently static.`,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
