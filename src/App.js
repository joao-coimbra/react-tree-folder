import './App.css';

import { TreeFolder, RenderFolder as Folder, RenderFile as File } from './components/TreeFolder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TreeFolder>
          <Folder name='app'>
            <Folder name='client' />
            <Folder name='loja'>
              <Folder name='barco' />
              <Folder name='pijama'>
                <Folder name='casaco'/>
                <File name='calça'/>
              </Folder>
            </Folder>
          </Folder>
        </TreeFolder>
      </header>
    </div>
  );
}

export default App;
