import useCount from './hooks/ex1'

export default function Mouse() {
    const [count, increment] = useCount();

    return (
        <div onMouseEnter={increment}>
           Hover {count} times
        </div>
    );
}
  