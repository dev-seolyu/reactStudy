// import React from 'react';

// export default function Profile(props) {
//   return (
//     <div className="profile">
//       <img className="photo" src={props.image} alt="avatar" />
//       <h1>{props.name}</h1>
//       <p>{props.title}</p>
//     </div>
//   );
// }

import React from 'react';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
