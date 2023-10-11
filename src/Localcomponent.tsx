import useLocalStorage from './hooks/LocalStoregHook'; 

function Localcomponent() {
  const [age, setAge, removeAge] = useLocalStorage('age', 0);

  return (
    <div>

       <input
        type="text"
        value={age}
        onChange={e => setAge(e.target.value)}  
      />
      <button onClick={removeAge}>Remove Age</button>
      <p>the age is {age}</p>
    </div>
  );
}
export default Localcomponent