import { useInsertionEffect, useState } from "react";

function getStyleForRule(theme) {
    const style = document.createElement('style');
    style.innerHTML = `
        button {
            color: ${theme === 'dark' ? 'white' : 'black'};
            background-color: ${theme === 'dark' ? 'black' : 'white'};
        }
    `
    return style;
}

export default function useCSS() {
    const [theme, setTheme] = useState('dark');
    useInsertionEffect(() => {
        const style = getStyleForRule(theme);
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style)
        };
    }, [theme]);
    return () => setTheme(theme === 'dark' ? 'white' : 'dark')

}