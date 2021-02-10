import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      action: string;
      paragraph: string;
      input: string;
      card: string;
      small: string;
    };
  }
}
