import React,{Component} from 'react'
import path from '../../assets/searchIcon.png'
import Icon from '../Common/Icon'
import './styles.css';

class SearchBox extends Component {
    
    constructor(props){
        super(props); 
    }

    doSomething = function (e) {
      alert('it works!');
      e.preventDefault();
      return true;
    }

    handleInputChange(event) {
      this.setState({
        query: event.target.value
      });
  
      this.props.setFilter(event.target.value);
    }
   
    render() {
        return (
          <div className="search-box">
            <Icon path={path}/>
                <input
                type='text'
                size='45'
                onSubmit = {this.doSomething}
                onChange={this.handleInputChange.bind(this)}
                placeholder='Buscar sucursal'
                />
          </div>
        )
    }
}

export default SearchBox;