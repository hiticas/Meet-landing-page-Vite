import './App.scss'
import Hero from './components/Hero/Hero'
import Button from './ui-components/Button/Button'
import Typography from './ui-components/Typography/Typography'

function App() {
  return (
    <main className="app">
      <Hero />
      
      <div className="design-system">
        <Typography as="h1" type="preset-1">Group Chat for Everyone</Typography>
        <Typography as="h2" type="preset-2">Group Chat for Everyone</Typography>
        <Typography type="preset-3">Group Chat for Everyone</Typography>
        <Typography type="preset-4">Group Chat for Everyone</Typography>
        <Typography type="preset-5">Group Chat for Everyone</Typography>
        <Button variant="blue">
          <Typography type="preset-5" color="white">Download</Typography>
          <Typography type="preset-5" color="cyan">v1.3</Typography>
        </Button>

        <Button variant="purple">
          <Typography type="preset-5" color="white">Download</Typography>
          <Typography type="preset-5" color="purple">v1.3</Typography>
        </Button>
      </div>
    </main>
  )
}

export default App
