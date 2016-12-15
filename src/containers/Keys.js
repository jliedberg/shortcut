import React from 'react';

export default function(props) {
  let keysJoined = props.keys.map(keys => {
    return keys.map(keys => {
      return <li className="key">{keys.join('/')}</li>;
    });
  }).reduce((a, b) => {
    return !a ? [b] : [...a, ', ', b];
  }, null);
  return <ul className="keys">{keysJoined}</ul>;
};
