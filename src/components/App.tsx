import BracketsTaskContainer from './BracketsTaskContainer';
import ListTaskContainer from './ListTaskContainer';

const App: React.FC = () => {
  return (
    <div className='app' style={{ padding: '20px', maxWidth:'700px', margin: 'auto' }}>
      <BracketsTaskContainer />
      <br />
      <ListTaskContainer />
    </div>
  );
}

export default App;
