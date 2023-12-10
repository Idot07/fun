import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.idot.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
