import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header'
import QnA from './components/QnA/QnA'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <QnA></QnA>
    </div>
  )
}

export default App
