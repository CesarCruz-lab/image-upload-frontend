import { Box } from './components/Box';
import { FileContextProvider } from './contexts/FileContext';
import { Uploads } from './components/Uploads';

function App() {
  return (
    <Box>
			<FileContextProvider>
				<Uploads />
			</FileContextProvider>
    </Box>
  );
}

export default App;
