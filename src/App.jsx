import styles from './App.module.css';
import Button from './component/Button';
import Counter from './component/Counter';
import { createSignal } from 'solid-js';

function App() {

  const [ clickCount, setClickCount ] = createSignal(0);

  const clickManage = () => {
    setClickCount(clickCount() + 1);
  };

  const countReset = () => {
    setClickCount(0);
  };

  return (
    <div class={styles.App}>
      <div class='main-container'>
        <Counter clickCount = { clickCount }/>
        <Button 
          
          text = { 'Click' }
          isClickButton = { true }  
          clickManage = { clickManage }
        />
        <Button 
          text = { 'Reset' }
          isClickButton = { false }  
          clickManage = { countReset }
        />
      </div>
    </div>
  );
};

export default App;