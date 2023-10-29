import { cn } from "@/lib/utils";
import { routes } from "@/routes/routes";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="grid items-start gap-2">
          {routes.map(({ to, name, Icon }) => {
            return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "bg-blue-950 text-white rounded-md " : ""
                }
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-200 hover:text-black"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{name}</span>
                </span>
              </NavLink>
            );
          })}
        </nav>
  )
}