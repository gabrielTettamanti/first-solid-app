import '../stylesheet/Counter.css'

function Counter ({ clickCount }) {
  return (
    <div class="counter">
      { clickCount }
    </div>
  );
}

export default Counter