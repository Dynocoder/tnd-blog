import BlogCard from './BlogCard';

const blogs = [
  { id: 1, title: 'Blog Title 1', summary: 'This is a summary of blog 1' },
  { id: 2, title: 'Blog Title 2', summary: 'This is a summary of blog 2' },
  // Add more sample blogs
];

function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
