import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Index.js'
import Landing from '../Landing/Index.js'
import Footer from '../Footer/Index.js'

function App() {
  return (
    <div className='text-center'>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
