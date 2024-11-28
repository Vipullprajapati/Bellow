import data  from "./assets/data.json";

import Bellow from "./Bellow";


function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Bellow value={data} />
      </div>
    </div>
  );
}

export default App;
