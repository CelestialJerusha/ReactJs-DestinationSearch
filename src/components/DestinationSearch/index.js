import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
    state = {searchInput:''}

    onChangeInput=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    render() {
        const {destinationsList} = this.props
        const {searchInput} = this.state
        const searchResult = destinationsList.filter((eachObject)=>eachObject.name.toLowerCase().includes(searchInput.toLowerCase()))
        return(
            <div className='main-container'>
                <h1>Destination Search</h1>
                <div className='search-input'>
                    <input className='input-element' type="search" placeholder='search' onChange={this.onChangeInput}/>
                    <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon"/>
                </div>
                <ul className='container'>
                    {
                        searchResult.map((eachObj)=><DestinationItem eachItem={eachObj}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default DestinationSearch