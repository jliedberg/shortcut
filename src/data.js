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

export default CLUSTERS
