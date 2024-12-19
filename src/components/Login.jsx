import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBitbucket,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Heading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;

  h1 {
    font-family: "Inter", sans-serif;
    color: #181d27;
    font-size: 28px;
    margin: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 28px;
    height: 28px;
  }

  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 22px;
    font-family: "Satoshi", sans-serif;
    color: #181d27;
  }
`;

const StyledButton = styled(Button)`
  width: 311px !important;
  height: 60px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  text-transform: none !important;

  &.MuiButton-outlined {
    color: #414651 !important;
    border-color: #414651 !important;
  }
`;

const StyledLogin = styled(Button)`
  width: 446px !important;
  height: 48px !important;
  text-transform: none !important;
  &.MuiButton-outlined {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #171717 !important;
    border-color: #171717 !important;
  }
`;

const StyledLoginOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 48px 24px;
`;

const PrivacyPolicyText = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #414651;
  margin-top: 32px;
`;

const ButtonGroup = styled(Stack)`
  gap: 16px;
`;

function Signin() {
  const [selectedOption, setSelectedOption] = useState(true);
  const navigate = useNavigate();

  const selectSaas = () => setSelectedOption(true);
  const selectSelf = () => setSelectedOption(false);

  const handleLoginClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <Heading>
        <LogoContainer>
          <img src="/src/assets/logo.png" alt="CodeAnt AI Logo" />
          <h2>CodeAnt AI</h2>
        </LogoContainer>
        <h1>Welcome to CodeAnt AI</h1>
      </Heading>

      <Container>
        <div className="saasorself">
          <Stack spacing={2} direction="row">
            <StyledButton onClick={selectSaas} variant="contained">
              Saas
            </StyledButton>
            <StyledButton onClick={selectSelf} variant="outlined">
              Self Hosted
            </StyledButton>
          </Stack>
        </div>
        <StyledLoginOptions className="loginoptions">
          <Stack spacing={2} direction="column">
            {selectedOption === true && (
              <>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faGithub} />}
                  onClick={handleLoginClick}
                >
                  Sign in with GitHub
                </StyledLogin>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faBitbucket} />}
                  onClick={handleLoginClick}
                >
                  Sign in with Bitbucket
                </StyledLogin>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faCloud} />}
                  onClick={handleLoginClick}
                >
                  Sign in with Azure Devops
                </StyledLogin>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faGitlab} />}
                  onClick={handleLoginClick}
                >
                  Sign in with GitLab
                </StyledLogin>
              </>
            )}
            {selectedOption === false && (
              <>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faGithub} />}
                  onClick={handleLoginClick}
                >
                  Sign in with GitHub
                </StyledLogin>
                <StyledLogin
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faGitlab} />}
                  onClick={handleLoginClick}
                >
                  Sign in with GitLab
                </StyledLogin>
              </>
            )}
          </Stack>
        </StyledLoginOptions>
        <PrivacyPolicyText>
          By signing up you agree to the Privacy Policy.
        </PrivacyPolicyText>
      </Container>
    </div>
  );
}

export default Signin;
