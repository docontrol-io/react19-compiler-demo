import {NavLink, Outlet} from 'react-router-dom'

export default function Actions() {
  return (
    <div>
      <nav className="flex items-center gap-4 py-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'use-transition'}
        >
          useTransition
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'use-action-state'}
        >
          useActionState
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'use-form-status'}
        >
          useFormStatus
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-fuchsia-300' : ''
          }
          to={'use-optimistic'}
        >
          useOptimistic
        </NavLink>
      </nav>
      <section className="mt-8">
        <Outlet />
      </section>
    </div>
  )
}
