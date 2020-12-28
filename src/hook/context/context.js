/*
useContext:
接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop决定


当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，
并使用最新传递给 MyContext provider 的 context value 值。

即使祖先使用 React.memo 或 shouldComponentUpdate，
也会在组件本身使用 useContext 时重新渲染


别忘记 useContext 的参数必须是 context 对象本身  重要 context切记
*/

import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(null);

export default function Context() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  //console.log(theme)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
