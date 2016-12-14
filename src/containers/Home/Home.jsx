import React, {Component} from 'react'
import {Link} from 'react-router'
import SearchInput, {createFilter} from 'react-search-input'

import CLUSTERS from '../../data'
import Shortcut from '../Shortcut/Shortcut'

const KEYS_TO_FILTERS = ['name', 'shortcuts.desc', 'shortcuts.keys']

export default class Home extends Component {
  constructor() {
    super();
    this.searchUpdated = this.searchUpdated.bind(this);
    this.state = { searchTerm: '' };
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }

  render() {
    const filteredClusters = CLUSTERS.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const clusters = filteredClusters.map(cluster => {
      const shortcuts = cluster.shortcuts.map(shortcut => {
        return <Link key={shortcut.id} to={`/${cluster.id}/${shortcut.id}`}><li>{shortcut.keys.join(' + ')} - {shortcut.desc}</li></Link>;
      });
      return (
        <div className="col col--sm-4" key={this.props.key}>
          <div className="cluster">
            <h5 className="cluster__name">{cluster.name}</h5>
            <Shortcut data={shortcuts}/>
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
