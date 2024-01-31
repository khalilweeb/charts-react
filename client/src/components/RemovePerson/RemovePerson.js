
import Modal from '../Ui/Modsl';
import clss from './RemovePerson.module.css';
const RemovePerson = props => {

    return (
        <Modal onClick={props.onClick}>
            <h1 className={clss.h1}>Remove Person</h1>
            <form className={clss.form}>
                <div className={clss.name}> 
                    <lable>Name:</lable> <input type='text' placeholder='enter person name'/><button>Remove</button><button>Cancel</button>
                </div>
                
            </form>
        </Modal>
    )


}

export default RemovePerson;