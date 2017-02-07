import React, { Component } from 'react';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      infoText: ''
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
    alert('a name was submitted: '+ this.state.category + this.state.infoText)
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
</div>
    );
  }
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Post: [],
      Vaktmester: [],
      Renhold: [],
      Utland: [],
      Beskjed: []      
    };
    
  }
  render() {
    return (
      <div>
      {this.state.Post.map(Post => <li key={Post.id}>
      </li>
      )}
      </div>

    );
  }
}




export default Form;
