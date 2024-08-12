import Counter from "./Counter";
import {useState, useMemo, useCallback} from 'react'

function SortedListOfNames({
    names, sortFunc
}) {
    // const sortedNames = sortFunc(names)
    const sortedNames = useMemo(() => sortFunc(names), [names, sortFunc])
    return <div>
        <h1>Names</h1>
        <ul>
            {sortedNames.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
}

export default function SortExample() {
    const [count, setCount] = useState(0);
    const [names] = useState(['John', 'Bob', 'Alice', 'Charles'])
    const sortNames = (names) => {
        console.log('names...', Math.random())
        return names.toSorted()
    }
    // const sortNames = useCallback((names) => {
    //     console.log('names...', Math.random())
    //     return names.toSorted()
    // }, [])

    return (
        <div>
            <Counter count={count} setCount={setCount} />
            <SortedListOfNames names={names} sortFunc={sortNames} />
        </div>
    )
}