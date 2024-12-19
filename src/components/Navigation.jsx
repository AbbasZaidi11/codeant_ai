import React from "react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import HomeIcon from "@mui/icons-material/Home";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledNavBar = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const NavHeader = styled.h2`
  margin: 0 0 32px 0;
  color: #414651;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 28px;
    height: 28px;
  }
`;

const StyledNavButton = styled(Button)`
  width: 100%;
  height: 48px !important;
  padding: 12px 16px !important;
  justify-content: flex-start !important;
  text-transform: none !important;
  background-color: white !important;
  color: #414651 !important;

  svg {
    margin-right: 12px;
    font-size: 20px;
  }

  &:hover {
    background-color: #1570ef !important;
    color: white !important;
  }
`;

const TopButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BottomButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
`;

function Navigation() {
  return (
    <StyledNavBar>
      <NavHeader>
        <img src="/src/assets/logo.png" alt="CodeAnt AI Logo" />
        CodeAnt AI
      </NavHeader>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ marginBottom: "16px" }} // Add spacing below button
      >
        UtkarshDhairyaPa...
      </Button>

      <TopButtons>
        <Stack direction="column" spacing={2}>
          <StyledNavButton variant="contained">
            <HomeIcon />
            Repositories
          </StyledNavButton>
          <StyledNavButton variant="outlined">
            <CodeIcon />
            AI Code Review
          </StyledNavButton>
          <StyledNavButton variant="outlined">
            <CloudIcon />
            Cloud Security
          </StyledNavButton>
          <StyledNavButton variant="outlined">
            <DisplaySettingsIcon />
            How to Use
          </StyledNavButton>
          <StyledNavButton variant="outlined">
            <SettingsIcon />
            Settings
          </StyledNavButton>
        </Stack>
      </TopButtons>
      <BottomButtons>
        <Stack direction="column" spacing={2}>
          <StyledNavButton variant="outlined">
            <SupportIcon />
            Support
          </StyledNavButton>
          <StyledNavButton variant="outlined">
            <LogoutIcon />
            Logout
          </StyledNavButton>
        </Stack>
      </BottomButtons>
    </StyledNavBar>
  );
}

export default Navigation;
