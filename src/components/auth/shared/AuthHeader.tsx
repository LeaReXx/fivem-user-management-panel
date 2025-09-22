import React from "react";
type AuthHeaderProps = { title: string; children?: React.ReactNode };
const AuthHeader: React.FC<AuthHeaderProps> = ({ title, children }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-medium text-lg">{title}</h1>
      </div>
      {children ? (
        <div>
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default AuthHeader;
