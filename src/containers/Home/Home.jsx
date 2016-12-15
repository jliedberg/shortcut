import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'shortcuts.desc', 'shortcuts.keys']

import Shortcut from '../Shortcut/Shortcut';
import CLUSTERS from '../../data';

export default class Home extends Component {
  constructor() {
    super();
    this.searchUpdated = this.searchUpdated.bind(this);
    this.state = { searchTerm: '' };
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  render() {
    const filteredClusters = CLUSTERS.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const clusters = filteredClusters.map((cluster, clusterIndex) => {
      const shortcuts = cluster.shortcuts.map((shortcut, shortcutIndex) => {
        return <Shortcut clusterIndex={clusterIndex} shortcut={shortcut} shortcutIndex={shortcutIndex} key={shortcutIndex}/>;
      });
      return (
        <div className="col col--sm-4" key={clusterIndex}>
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
          <SearchInput className="search__input" onChange={this.searchUpdated} />
          <div className="clusters row row--center">
            {clusters}
          </div>
        </div>
      </div>
    );
  }
}
