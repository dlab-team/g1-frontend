import './App.css'
import RoutesApp from './routes/RoutesApp'

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleResetPasswordSubmit = () => {
    setModalVisible(true);
  };

  return (
    <>
        <RoutesApp/>
    </>
  )
}

export default App
