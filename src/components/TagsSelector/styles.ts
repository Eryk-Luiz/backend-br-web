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
  width: 100%;
  max-width: 600px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 0;

  input[type='text'] {
    background-color: ${props => props.theme.colors.card};
    color: ${props => props.theme.colors.paragraph};
    padding-left: 8px;
  }
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
  background-color: ${props => props.theme.colors.card};
  top: ${props => `${props.top + 40}px`};
  right: ${props => `${props.right - props.width - 16}px`};
  width: ${props => `${props.width}px`};
  height: auto;
  max-height: 300px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.input};

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 8px;

    li {
      list-style: none;
      width: 100%;
      color: ${props => props.theme.colors.paragraph};
      box-sizing: border-box;
      padding: 8px;
      cursor: pointer;
      border-bottom: 1px solid ${props => props.theme.colors.small};
      transition: 200ms;

      &:hover {
        background-color: ${props => props.theme.colors.background};
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
  color: ${props => props.theme.colors.paragraph};
  background-color: ${props => `#${props.defaultColor}`};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
