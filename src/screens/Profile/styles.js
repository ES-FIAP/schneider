import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ProfileBio = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;
