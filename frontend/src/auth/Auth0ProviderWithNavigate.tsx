import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const { createUser } = useCreateMyUser();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Dofa kaik locha 6");
  }

  const onRedirectCallbask = (appState?: AppState, user?: User) => {
    if (user?.sub && user?.email) {
      createUser({ authoId: user.sub, email: user.email });
    }
    // console.log("User", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallbask}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
