import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { NavBar } from "@/components";

export const Navigation = () => {
  return (
    <Suspense fallback={""}>
      <BrowserRouter>
        <aside className="w-[200px] flex-col m-4 flex">
          <NavBar />
        </aside>

        <Routes>
          {routes.map(({ path, to, Component }) => (
            <Route key={to} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to="segments" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
