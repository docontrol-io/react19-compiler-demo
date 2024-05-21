import ThemeToggle from 'components/ThemeToggle.tsx'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  // TODO: Implement the Header component with Tailwind CSS
  return (
    <header className="p-4 border-b dark:border-slate-800">
      <div className="flex items-center justify-between">
        <Link to="/">
          <h1 className="text-4xl font-bold text-sky-500">React 19</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-lime-400' : ''
                }
                to="/actions"
              >
                Actions
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-lime-400' : ''
                }
                to="/use"
              >
                Use
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-lime-400' : ''
                }
                to="/other"
              >
                Other
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-lime-400' : ''
                }
                to="/compiler"
              >
                Compiler
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
