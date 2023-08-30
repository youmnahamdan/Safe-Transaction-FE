import './App.css';
import Footer from './component/footer/footer';
import NavBar from './component/nav-bar/nav-bar';
import TransactionForm from './component/transaction/transactionForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TransactionForm/>
      <Footer/>
    </div>
  );
}

export default App;
