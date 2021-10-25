import './App.css';
import './index.css';

function App() {
  return (

    <div className="App">
      <div className="h-full flex items-center justify-center">
        <div className="p-6 max-w-sm mx-auto bg-gray-50 rounded-xl shadow flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div >
  );
}

export default App;
