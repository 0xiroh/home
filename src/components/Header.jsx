import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-300 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <div className="flex space-x-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
