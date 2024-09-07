import BlogList from '../components/BlogList';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <BlogList />
    </div>
  );
}

export default Home;
