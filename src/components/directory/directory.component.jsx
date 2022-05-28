import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Popy1",
          imageUrl: "https://placedog.net/500",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "Dog2",
          imageUrl: "https://placedog.net/501",
          id: 2,
          linkUrl: "",
        },
        {
          title: "popy3",
          imageUrl: "https://placedog.net/502",
          id: 3,
          linkUrl: "",
        },
        {
          title: "WildDog",
          imageUrl: "https://placedog.net/5213",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "gogoliDog",
          imageUrl: "https://placedog.net/534",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
