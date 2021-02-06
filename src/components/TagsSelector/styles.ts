import styled from 'styled-components';

interface IitemsProps {
  top: number;
  right: number;
  width: number;
}

interface ISelectedTagsItem {
  defaultColor: string;
}
export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  height: 30px;
  border-radius: 8px;
  outline: none;
  border: 0;
`;

export const Drop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ItemsContainer = styled.div<IitemsProps>`
  position: absolute;
  background-color: #fff;
  top: ${props => `${props.top + 40}px`};
  right: ${props => `${props.right - props.width - 5}px`};
  width: ${props => `${props.width}px`};
  height: auto;
  max-height: 300px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 2px solid #000;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 8px;

    li {
      list-style: none;
      width: 100%;
      color: #000;
      box-sizing: border-box;
      padding: 8px;
      cursor: pointer;
      border-bottom: 1px solid #cecece;
      transition: 200ms;

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
`;

export const SelectedTagsContainer = styled.div`
  width: 100%;
  width: 100%;
  max-width: 600px;
  min-height: 50px;
  border-radius: 8px;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
`;

export const SelectedTagsItem = styled.span<ISelectedTagsItem>`
  width: auto;
  height: 20px;
  border-radius: 4px;
  padding: 6px;
  margin: 4px;
  color: #000;
  background-color: ${props => `#${props.defaultColor}`};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
