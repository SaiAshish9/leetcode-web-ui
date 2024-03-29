import styled from "styled-components";
import Image from "next/image";

export const StyledImg = styled(Image)`
  width: 32%;
  height: 100%;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 0px;
  margin-right: 0px;
`;

export const StyledSliderImage = styled(Image)`
  width: 100%;
  height: fit-content;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
`;

export const StyledSliderText = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  line-height: 1.5;
  margin: 0.4rem auto 0;
`;

export const Content = styled.div`
  text-align: center;
  width: 18%;
`;

export const ArrowBox = styled.div`
  background-color: #ffffff12;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.375rem;
`;

export const StyledArrowImg = styled(Image)`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
`;

export const TopSliderContainer = styled.div`
  padding-top: 2.7rem;
`;

export const Border = styled.hr`
  border-color: rgb(61 61 61);
  border-top-width: 1px;
  width: 100%;
  margin-top: 1.8rem;
  margin-bottom: 2.1rem;
`;
