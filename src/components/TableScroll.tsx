import type { ReactNode } from "react";

/**
 * Mobile-safe wrapper for wide tables: the table scrolls inside this box
 * instead of forcing the whole page to scroll horizontally.
 */
export default function TableScroll({ children }: { children: ReactNode }) {
  return (
    <div className="table-scroll" role="region" tabIndex={0} aria-label="Scrollable table">
      {children}
    </div>
  );
}
