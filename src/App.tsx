import { Avatar } from './component/avatar.component';
import { Quote } from './component/quotes.component';

function App() {
  const divStyle =
    'box-border bg-gradient-to-br from-gradientFrom to-gradientTo h-screen flex-auto m-0 p-5';
  return (
    <div className={divStyle}>
      <Avatar />
      <Quote />
    </div>
  );
}

export default App;
