"use client";

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';


const ColorsListings = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="w-full h-screen flex items-center justify-center">
          <main>ColorsListings INCOMING</main>
        </div>
      )}
    </Authenticator>
  );
};

export default ColorsListings;

// aws sso login --profile amplify-dev-tools
// npx ampx sandbox --profile amplify-dev-tools


// aws-sso-util configure profile --profile amplify-dev-tools --sso-start-url https://roamiowa.awsapps.com/start/ --sso-region us-east-1 --region us-east-1