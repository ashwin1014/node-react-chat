import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const LeftContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const Icon = styled.img`
  margin-right: 5%;
`;
