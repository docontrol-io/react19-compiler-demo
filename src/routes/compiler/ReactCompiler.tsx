import Description from 'routes/compiler/Description.tsx'
import { NavLink, Outlet } from 'react-router-dom'

export default function ReactCompiler() {
  return (
    <div>
      <Description />
      <nav className="flex items-center gap-4 mt-16 py-4 border-t border-slate-700">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'memo'}
        >
          Memo
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'use-callback-use-memo'}
        >
          useCallback and useMemo
        </NavLink>
      </nav>
      <section className="mt-8">
        <Outlet />
      </section>
    </div>
  )
}
