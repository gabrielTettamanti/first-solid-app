import '../stylesheet/Button.css';

function Button({ text, isClickButton, clickManage }) {
  return(
    <button 
      class = { isClickButton ? 'clickButton' : 'resetButton' }
      onClick = { clickManage }
      >
      {text}
    </button>
  );
}

export default Button;