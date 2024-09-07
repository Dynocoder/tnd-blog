import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">College Blog</Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {/* Additional links can be added here */}
      </div>
    </nav>
  );
}

export default Navbar;
