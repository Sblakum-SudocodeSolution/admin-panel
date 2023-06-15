import React from "react";

const USER_TYPES = {
  INTERNAL_USER: "Internal_User",
  INDIVIDUAL: "Individual",
  COMPANY_USER: " Company_User",
};

const CURRENT_USER_TYPE = USER_TYPES.INTERNAL_USER;

export default function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.INTERNAL_USER) {
    return <>{children}</>;
  } else {
    return <div>You do not have access to this page </div>;
  }
}
