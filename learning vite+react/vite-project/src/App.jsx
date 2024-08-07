import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body1 from './components/Body1'
import './output.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Navbar />
      <div className="imageCards grid grid-cols-3">
        <Body1 sentence="This is a Sentence 1" />
        <Body1 sentence="This is a Sentence 2" />
        <Body1 sentence="This is a Sentence 3" />
        <Body1 sentence="This is a Sentence 4" />
        <Body1 sentence="This is a Sentence 5" />
        <Body1 sentence="This is a Sentence 6" />
      </div>
      <Counter/>
      <Footer />
    </>
  )
}

export default App