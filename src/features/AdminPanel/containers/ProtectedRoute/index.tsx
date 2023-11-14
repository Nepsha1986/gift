import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) void loginWithRedirect();
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
