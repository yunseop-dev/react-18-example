
export default function Counter({ count, setCount }) {
    return (<div>
        <button onClick={() => {
            setCount(val => val + 1)
        }}>
            increment {count}
        </button>
    </div>
    )
}