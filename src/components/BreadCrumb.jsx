
import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb custom-breadcrumb d-flex align-items-center gap-1 flex-wrap mb-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const labelContent = (
            <>
              {item.icon && <span className="me-1">{item.icon}</span>}
              <span>{item.label}</span>
            </>
          );

          return (
            <React.Fragment key={item.href || item.label || index}>
              <li
                className={`breadcrumb-item d-flex align-items-center m-0 ${
                  isLast ? "active text-body" : ""
                }`}
                {...(isLast ? { "aria-current": "page" } : {})}
              >
                {!isLast && item.href ? (
                  <Link
                    to={item.href}
                    className="text-decoration-none text-dark d-flex align-items-center gap-1"
                  >
                    {labelContent}
                  </Link>
                ) : (
                  <span className="d-flex align-items-center gap-1">
                    {labelContent}
                  </span>
                )}
              </li>

              {!isLast && (
                <li
                  aria-hidden="true"
                  className="text-muted d-flex align-items-center"
                >
                  <ChevronRight size={16} />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
