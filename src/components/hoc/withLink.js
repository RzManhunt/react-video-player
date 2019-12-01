import React from 'react';
import { Link } from 'react-router-dom';

const withLink = WrappedComponent => props => {
  return(
    <Link to={`/${props.video.id}`}>
      <WrappedComponent { ...props } />
    </Link>
  )
}

export default withLink;