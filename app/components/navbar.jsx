// @flow strict
import Link from "next/link";

function Navbar() {
  // Define a list of links to keep the code DRY (Don't Repeat Yourself)
  const links = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/blog", label: "BLOGS" },
    { href: "/#projects", label: "PROJECTS" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        {/* Brand Section */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            SHIVAM GIRI
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <div className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600 no-underline outline-none">
                  {link.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
