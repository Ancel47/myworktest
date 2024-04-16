import styled from "styled-components";

type Props = {
  message?: string;
};

export const DangerIcon = ({ message }: Props) => {
  return (
    <Container>
      <StyledDangerIcon
        src="https://refine.ams3.cdn.digitaloceanspaces.com/win95/error-icon.png"
        alt={message}
        aria-label={message}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDangerIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: sub;
`;
