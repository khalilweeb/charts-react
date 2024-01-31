import  clss from './UpdatePerson.module.css'

import Modal from '../Ui/Modsl';

const UpdatePerson = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <h1 className={clss.h1}>Update person</h1>
      <form className={clss.form}>
       <div className='name'> <lable>Name:</lable> <input type="text" placeholder="person name" /> </div>
        <div>
          <lable>jav:</lable> <input type="number" placeholder="gained" />{" "}
          <input type="number" placeholder="lost" />
        </div>
        <div>
          <lable>fev:</lable> <input type="number" placeholder="gained" />{" "}
          <input type="number" placeholder="lost" />
        </div>
      
        <div>
          <lable>mar:</lable> <input type="number" placeholder="gained" />{" "}
          <input type="number" placeholder="lost" />
        </div>
        <div>
          <lable>avr:</lable> <input type="number" placeholder="gained" />{" "}
          <input type="number" placeholder="lost" />
        </div>
        <div>
          <lable>may:</lable> <input type="number" placeholder="gained" />{" "}
          <input type="number" placeholder="lost" />
        </div>

        <div className={clss.buttons}><button>Close</button>    <button type="submit">Update</button> </div>
      </form>
    </Modal>
  );
};

export default UpdatePerson;
