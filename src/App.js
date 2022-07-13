import './App.css';

import { TreeFolder, RenderFolder as Folder, RenderFile as File } from './components/TreeFolder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TreeFolder>
          <Folder name='app'>
            <Folder name='backend' />
            <Folder name='frontend'>
              <Folder name='public' />
              <Folder name='src'>
                <Folder name='components'/>
                <File name='App.js'/>
              </Folder>
            </Folder>
          </Folder>
        </TreeFolder>
      </header>
    </div>
  );
}

export default App;
