import React, { useEffect, useState, createContext, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

export function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAuth0();

    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: "dev-6bs0bzzi.us.auth0.com",
        client_id: "CHcsXfvGjpNXvzL2W6hwz3AoIrwNATv3",
        redirect_uri: window.location.origin,
      });
      setAuth0Client(auth0);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        try {
          await auth0.handleRedirectCallback();
        } catch (error) {
          alert(error);
        }
      }
      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);
      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <div>Loading page..</div>;

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...p) => auth0Client.loginWithRedirect(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
