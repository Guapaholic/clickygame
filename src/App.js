import React, { Component } from 'react';
import './App.css';
import ClickyGame from './components/ClickyGame'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickyGame 
          images={[
            {url:'https://vignette.wikia.nocookie.net/ricksanchez/images/f/f6/Jerry_Smith.jpg/revision/latest?cb=20160609043244', name:'Jerry'},
            {url:'https://img.fireden.net/co/image/1467/55/1467554630277.jpg', name:'Rick'},
            {url:'https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20151204220729', name:'Beth'},
            {url:'http://pm1.narvii.com/6471/3f595a428938815dd148e69317e6f006a3d1e14f_00.jpg', name:'Birdperson'},
            {url:'https://vignette.wikia.nocookie.net/rickandmorty/images/d/d9/Slowmobius.jpg/revision/latest?cb=20151227062305', name:'SlowMobius'}
          ]}
        />
      </div>
    );
  }
}

export default App;
