import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `relative px-4 py-2 font-medium text-neutral-400 hover:text-white transition-colors duration-200
     before:content-[''] before:absolute before:inset-0 before:rounded-md
     before:border before:border-white before:opacity-0 before:scale-0 before:transition-transform before:duration-300 before:origin-center
     hover:before:opacity-100 hover:before:scale-100
     ${
       location.pathname === path
         ? 'text-white before:opacity-100 before:scale-100 before:bg-white/10 before:shadow-[0_0_12px_rgba(100,100,255,0.4)]'
         : ''
     }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#242424] border-b border-neutral-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center font-mono text-sm space-x-8">
        <Link to="/" className={linkStyle('/')}>home</Link>
        <Link to="/projects" className={linkStyle('/projects')}>projects</Link>
        <Link to="/about" className={linkStyle('/about')}>about</Link>
      </div>
    </nav>
  );
};

export default Navbar;
