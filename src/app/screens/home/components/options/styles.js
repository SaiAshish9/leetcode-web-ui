import styled, { css } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  margin-top: 1.8rem;
  display: flex;
`;

export const Button = styled.div`
  color: rgb(38 38 38);
  background: #fff;
  padding: 10px 1rem;
  font-size: 0.9rem;
  width: fit-content;
  border-radius: 9999px;
  white-space: no-wrap;
  word-wrap: break-word;
  margin-right: 1rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  ${({ highlighted }) =>
    highlighted
      ? css`
          color: #eff1f6bf;
          background: rgb(40 40 40);
        `
      : css``};
`;

export const StyledIcon = styled(Image)`
  margin-right: 0.5rem;
`;
