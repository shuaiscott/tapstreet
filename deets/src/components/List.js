import React from 'react';

const urlsMap = {
  linkedin: 'https://linkedin.com/in/',
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  pinterest: 'https://pinterest.com/',
  venmo: 'https://venmo.com/',
};

const List = (props) => {
  const { deet } = props;
  if (!deet || !deet.id) return <h2>Deets not found 😭</h2>;
  return (
          <div id='{deet.id'>
            <img src={deet.image_url} alt={deet.name} width="100%" height="100%" />
            <h2 className='name'>{deet.name}</h2>
            <h4 className='id'>{deet.phone}</h4>
            <h4 className='id'>{deet.email}</h4>
            <div className="row">
              <div className="column"><a href={urlsMap['linkedin'] + deet.linkedin}><img src="app-icons/linkedin.svg" alt="linkedin" width="30%" /></a></div>
              <div className="column"><a href={urlsMap['instagram'] + deet.instagram}><img src="app-icons/instagram.svg" alt="instagram" width="30%" /></a></div>
            </div>
            <div className="row">
              <div className="column"><a href={urlsMap['facebook'] + deet.facebook}><img src="app-icons/facebook.svg" alt="facebook" width="30%" /></a></div>
              <div className="column"><a href={urlsMap['pinterest'] + deet.pinterest}><img src="app-icons/pinterest.svg" alt="pinterest" width="30%" /></a></div>
            </div>
          </div>
  );
};
export default List;