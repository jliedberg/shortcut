import React from 'react';

export default function(props) {
  let keysJoined = props.keys.map(keys => {
    return keys.map(keys => {
      return keys.join('/');
    }).join(' + ');
  }).join(' , ');
  return <span>{keysJoined}</span>;
};
