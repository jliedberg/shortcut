import React, {Component} from 'react';
import Minigrid from 'minigrid';

import Shortcut from '../Shortcut/Shortcut';
import CLUSTERS from '../../data';

export default class Home extends Component {
  constructor() {
    super();
    this.searchUpdated = this.searchUpdated.bind(this);

    const clusters = CLUSTERS.map((cluster, clusterIndex) => {
      const shortcuts = cluster.shortcuts.map((shortcut, shortcutIndex) => {
        return Object.assign({}, shortcut, {
          id: shortcutIndex
        });
      });
      return Object.assign({}, cluster, {
        id: clusterIndex,
        shortcuts: shortcuts
      });
    });
    this.state = {
      clusters: clusters,
      filteredClusters: clusters
    };
  }

  componentDidMount() {
    this.updateGrid();
  }

  componentDidUpdate() {
    this.updateGrid();
  }

  updateGrid() {
    new Minigrid({
      container: '.clusters',
      item: '.col'
    }).mount();
  }

  searchUpdated(event) {
    const clusters = this.state.clusters.filter(cluster => {
      if (event.target.value) {
        return cluster.shortcuts.filter(shortcut => {
          return shortcut.desc.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
        }).length > 0;
      } else {
        return true;
      }
    }).map(cluster => {
      const shortcuts = cluster.shortcuts.filter(shortcut => {
        if (event.target.value) {
          return shortcut.desc.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
        } else {
          return true;
        }
      });
      return Object.assign({}, cluster, {
        shortcuts: shortcuts
      });
    });
    this.setState({
      filteredClusters: clusters
    });
  }

  render() {

    const clusters = this.state.filteredClusters.map((cluster, index) => {
      const shortcuts = cluster.shortcuts.map(shortcut => {
        return <Shortcut cluster={cluster} shortcut={shortcut} key={shortcut.id}/>;
      });
      return (
        <div className="col col--sm-4" key={cluster.id}>
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
          <input type="text" className="search__input" onChange={this.searchUpdated} />
          <div className="clusters row">
            {clusters}
          </div>
        </div>
      </div>
    );
  }
}
