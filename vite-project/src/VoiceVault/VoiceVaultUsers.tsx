// File: src\VoiceVault\VoiceVaultUsers.tsx

import React from "react";
import "./VoiceVaultUsers.css";
import Header from "../components/Header";

const VoiceVaultUsers: React.FC = () => {
  return (
    <>
      <Header />
      <div className="voicevault-container">
        <h1>Welcome to VoiceVault Help Landing Page</h1>
        <p>
          If you would like to delete your account, have any inquiries or more,
          please contact us at: <br />
          <a href="mailto:voicevaultcontact@gmail.com">
            VoiceVaultContact@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default VoiceVaultUsers;
