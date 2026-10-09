import { ViewTransition } from "react";

// Templates remount on every navigation, so the page content cross-fades between routes.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}
