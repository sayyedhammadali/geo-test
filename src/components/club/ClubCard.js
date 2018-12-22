import React from 'react';

const ClubCard = (props) => {
  const {_id, club_name, club_address, club_description, club_website} = props.club;

  return (
    <div className="card mb-2" id={_id}>
      <h5 className="card-header">{club_name}</h5>
      <div className="card-body">
        <p className="card-title"><i className="fas fa-map-marker-alt pr-2"></i>{club_address}</p>
        <p className="card-text">{club_description}</p>
        <a href={club_website} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Club</a>
      </div>
    </div>
  );
};

export default ClubCard;