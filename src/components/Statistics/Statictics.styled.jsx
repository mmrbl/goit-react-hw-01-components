import styled from "@emotion/styled";


export const StatisticsSection = styled.section`
text-align: center;
background-color: #FFF;
border-radius: 4px;
margin-right: 20px;

box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const StaticticsTitle = styled.h2`
margin: 40px;
`

export const StaticticsList = styled.ul`
list-style: none;
display: flex;
border-top: 2px solid black;
`

export const StaticticsItem = styled.li`
  width: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${props => props.bgc};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

`

export const StaticticsItemLabel = styled.span`
font-weight: 700;
`

export const StaticticsItemPercentage = styled.span`
font-weight: 700;
font-size: 24px;
`