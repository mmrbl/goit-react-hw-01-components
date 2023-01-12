import styled from '@emotion/styled';

export const Profile = styled.div`
  min-width: 200px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  margin-right: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

export const ProfileDescription = styled.div`
  margin-bottom: 10px;
`;

export const ProfileAvatar = styled.img`
  padding-top: 10px;
  width: 150px;
  margin: 0 auto;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
  margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
  margin-bottom: 0;
`;

export const ProfileStats = styled.ul`
  display: flex;
  border-top: 1px solid grey;
  background-color: #f3f6f9;
`;

export const ProfileStatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  &:not(:last-child){
    border-right: 1px solid grey;
  }
`;

export const ProfileStatsLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
  font-size: 15px;
`;
