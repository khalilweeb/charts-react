import clss from './SideBar.module.css';

const SideBar = (props) => {

return(
     <div className={clss.sidebar}>
    <h1>Khalils Charts</h1>
    <ul>
        <li>Add Person</li>
        <li>Remove Person</li>
        <li>Edit Person</li>
       
    </ul>
</div>)


}

export default SideBar;