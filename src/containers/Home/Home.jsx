import React, {Component} from 'react'

const CLUSTERS = [{
  id: 1,
  name: 'General',
  shortcuts: [{
    id: 1,
    desc: 'New file in new tab',
    keys: [
      'cmd',
      'n'
    ]
  }, {
    id: 2,
    desc: 'Open file in new tab',
    keys: [
      'cmd',
      'o'
    ]
  }]
}, {
  id: 2,
  name: 'File navigation',
  shortcuts: [{
    id: 3,
    desc: 'Goto Anything',
    keys: [
      'cmd',
      'p'
    ]
  }, {
    id: 4,
    desc: 'Goto Line',
    keys: [
      'cmd',
      'g'
    ]
  }]
}, {
  id: 3,
  name: 'View/Window manipulation',
  shortcuts: [{
    id: 5,
    desc: 'Show/Hide Console',
    keys: [
      'cmd',
      '`'
    ]
  }]
}, {
  id: 4,
  name: 'Folding',
  shortcuts: [{
    id: 6,
    desc: 'Fold/expand',
    keys: ['cmd', '[']
  }]
}];

export default class Home extends Component {
  render() {
    const clusters = CLUSTERS.map(cluster => {
      const shortcuts = cluster.shortcuts.map(shortcut => {
        return <li key={shortcut.id}>{shortcut.keys.join(' + ')} - {shortcut.desc}</li>;
      });
      return (
        <div className="col col--sm-3" key={cluster.id}>
          <div className="cluster">
            <h5 className="cluster__name">{cluster.name}</h5>
            <ul className="cluster__shortcuts">
              {shortcuts}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="home">
        <div className="container">
          <h2 className="home__title">Sublime Text Shortcuts</h2>
          <div className="clusters row row--center">
            {clusters}
          </div>
        </div>
      </div>
    );
  }
}
