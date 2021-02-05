import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: auto;
  border-top: 16px solid #675ff5;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 200ms;

  :hover {
    transform: scale(1.05);
  }

  h1 {
    font-size: 14px;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    margin-bottom: 8px;

    span {
      width: auto;
      height: 23px;
      border-radius: 4px;
      padding: 0 3px 0 3px;
      margin: 4px;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 500;

      svg {
        cursor: pointer;
      }
    }
  }

  span {
    color: #15122b;
    margin-top: 8px;
  }
`;
