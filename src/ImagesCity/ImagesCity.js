import React from 'react';

export default class ImagesCity extends React.Component {
    constructor(props) {
      super(props);
      this.state = { pictures: props.pictures };
    }
  
    shouldComponentUpdate(nextProps) {
      if (nextProps.pictures[0].id !== this.state.pictures[0].id) {
        this.setState({ pictures: nextProps.pictures });
        return true;
      }
      return false;
    }
  
    render() {
      return (
        <div className="images-city">
            {this.state.pictures.map((el) => {
            return (
            <div className="image" key={el.id}>
                <img src={el.urls.small} alt="" />
        </div>
    )
  })}
</div>
      )
    }
  }
  