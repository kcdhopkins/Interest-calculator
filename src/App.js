import InterestCalculator from './components/InterestCalculator'

const App =  ()=> {
  const style = {
    height: '100vh', 
    border: 'black solid'
  }
  return (
    <div className='App' style={style}>
      <InterestCalculator />
    </div>
  );
}

export default App;
