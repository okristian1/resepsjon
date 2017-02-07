import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries : [],
    }
  }
  render() {
    return (
      {entries}

    );
  };

renderentries(entries) {
    if (entries.length > 0) {      
        return entries.map((entry, index) => (
            <entry key={index} entry={entry} />
        ));
    }
    else return [];
}

 entry = ({entry}) => {
    return ( 
        <entry key={entry.id}>
            <a href={entry.link}>{entry.title}</a>
            <p>{entry.description}</p>
        </entry>
    );
};

 entries = React.createClass({
    render() {
        const entries = renderentries(this.props.entries);

        return (
            <section>
                { entries }
            </section>
        );
    }
});
}

export default Category;