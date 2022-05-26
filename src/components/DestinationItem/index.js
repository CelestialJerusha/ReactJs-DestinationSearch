import './index.css'

const DestinationItem = (props)=> {
    const {eachItem} = props
    const {name,imgUrl} = eachItem
    return(
        <div>
            <img className='image' src={imgUrl} alt={name}/>
            <p className='name'>{name}</p>
        </div>
    )
}

 export default DestinationItem