import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      infoText: '',
      myArray : [],
    };
    
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeInfoText = this.handleChangeInfoText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCategory(event) {
    this.setState({category: event.target.value});
  }
  handleChangeInfoText(event) {
    this.setState({infoText: event.target.value});
  }

  handleSubmit(event) {
    this.setState(previousState => ({
      myArray: [...previousState.myArray, "Categori: " + this.state.category +" " + "Tekst: " + this.state.infoText]
    }));
    event.preventDefault();

}
  render() {
    return (
      <div className="form-group">
      <form onSubmit={this.handleSubmit}>
      <label>
      Kategori:
      <select value={this.state.value} className="form-control"  onChange={this.handleChangeCategory} >
      <option value="">Velg Kategori</option>
      <option value="Post">Post</option>
      <option value="Vaktmester">Vaktmester</option>
      <option value="Renhold">Renhold</option>
      <option value="Utland">Utland</option>
      <option value="Beskjed">Beskjed</option>
      </select>
      </label>      
      <br/>
      <label>
      Tekst info:
      <input type="textarea" className="form-control" value={this.state.value} onChange={this.handleChangeInfoText} />
      </label>      
      <br/>
      <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      {this.state.myArray}
</div>
    );
  }
}


export default Form;