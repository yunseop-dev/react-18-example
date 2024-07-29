import { useInsertionEffect } from "react";

function getStyleForRule(time) {
    const style = document.createElement('style');
    style.innerHTML = `
        .time {
            background-color: hsl(${time * 10}, 100%, 50%);
        }
    `
    return style;
}

export default function useTimeCSS(time) {
    useInsertionEffect(() => {
        const style = getStyleForRule(time);
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style)
        };
    }, [time]);
}
