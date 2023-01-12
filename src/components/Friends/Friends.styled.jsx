import styled from "@emotion/styled";
// import example from "../utils/example"

export const FriendsList = styled.ul`
  list-style: none;
`

export const FriendItem = styled.li`
width: 200px;
  display: flex;    
  align-items: center;
  &:not(:last-child){
    margin-bottom: 5px
  }

  border: 2px solid black;
  border-radius: 4px;
  padding: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${props => props.bgc};
`

export const FriendAvatar = styled.img`
display: block;
width: 50px;
margin-right: 10px;
`

export const FriendName = styled.p`
font-size: 24px;
font-weight: 500;
`