import { Box } from './components/Box';
import { Dropzone } from './components/Dropzone';

function App() {
	const onDrop = (acceptedFiles) => {
		console.log(acceptedFiles);
	}
	
  return (
    <Box>
      <Dropzone onDrop={onDrop} accept='image/*' />
    </Box>
  );
}

export default App;
