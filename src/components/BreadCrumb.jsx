import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb custom-breadcrumb d-flex align-items-center gap-1 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li
                className={`breadcrumb-item d-flex align-items-center m-0 ${
                  isLast ? "active" : ""
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="text-decoration-none text-dark d-flex align-items-center gap-1"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label && <span>{item.label}</span>}
                  </Link>
                ) : (
                  <span className="text-body d-flex align-items-center gap-1">
                    {item.icon && <span>{item.icon}</span>}
                    {item.label && <span>{item.label}</span>}
                  </span>
                )}
              </li>

              {!isLast && (
                <li className="text-muted d-flex align-items-center">
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
