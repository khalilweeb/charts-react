import clss from './SideBar.module.css';

const SideBar = (props) => {

return(
     <div className={clss.sidebar}>
    <h1>Khalils Charts</h1>
    <ul>
        <li onClick={props.add}>Add Person</li>
        <li onClick={props.remove}>Remove Person</li>
        <li onClick={props.update}>Edit Person</li>
       
    </ul>
</div>)


}

export default SideBar;