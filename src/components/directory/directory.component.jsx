import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Dogs1",
          imageUrl: "https://placedog.net/106",
          id: 1,
        },
        {
          title: "Dogs2",
          imageUrl: "https://placedog.net/205",
          id: 2,
        },
        {
          title: "Dogs3",
          imageUrl: "https://placedog.net/304",
          id: 3,
        },
        {
          title: "Dogs4",
          imageUrl: "https://placedog.net/403",
          size: "large",
          id: 4,
        },
        {
          title: "Dogs4",
          imageUrl: "https://placedog.net/502",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
