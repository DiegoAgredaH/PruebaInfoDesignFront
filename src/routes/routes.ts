import { LazyExoticComponent, lazy } from "react";
import { LucideIcon } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  Icon: LucideIcon;
  children?: Route[];
}

const LazySegments = lazy(() => import("@/sections/pages/Segments"));
const LazyClient = lazy(() => import("@/sections/pages/Client"));
const LazyWorstSegmentsByClient = lazy(() => import("@/sections/pages/WorstSegmentsByClient"));

export const routes: Route[] = [
  {
    to: "/segments",
    path: "segments",
    Component: LazySegments,
    name: "Tramos",
    Icon: Icons.segments,
  },
  {
    to: "/client",
    path: "client",
    Component: LazyClient,
    name: "Clientes",
    Icon: Icons.client,
  },
  {
    to: "/worstSegmentsByClient",
    path: "worstSegmentsByClient",
    Component: LazyWorstSegmentsByClient,
    name: "Peores Tramos/Cliente",
    Icon: Icons.worstSegmentsByClient,
  },
];
