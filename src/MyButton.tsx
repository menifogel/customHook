import Button from '@mui/material/Button';
import useCount from './hooks/ex1'

export default function MyButton() {
  const [ countBl, incrementBl ] = useCount();
  const [ countGr, incrementGr ] = useCount();

  return (
    <div>
      <Button variant="contained" color="primary" onClick={incrementBl}>
        Blue : {countBl}
      </Button>

      <Button variant="contained" sx={{
         backgroundColor:"green",
         }} 
         onClick={incrementGr}>
         Green : {countGr}  
      </Button>
    </div>
  );
}
