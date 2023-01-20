import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { groupinfo } from "../../../redux/actions/GroupAction";
import FormData from 'form-data';
import Navbar from "../Navbar/Navbar";
import nocontacts from '../../../assets/nocontacts.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Contactname from "./contactComp";

function Groupinfo(){
const[list1 , setList1] = useState();
const [check , setCheck] = useState(0);

const list =useSelector((s)=>s.groupreducer);

const dispatch=useDispatch();

useEffect(()=>{
dispatch(groupinfo(setCheck));
},[])
useEffect(()=>{
    if(check==1){
    setList1(list.contactList);
    }
    },[check])

    function getContact(list1) {
        return (
          <Contactname
            id={list1.id}
            name={list1.name}
            email={list1.email}
            gender={list1.gender}
          />
        );
        }
return(<>
<Navbar/>
<div className="namesdiv">
{(list1)?(list1.map((rest)=>getContact(rest))):<div id='nothing'><img src={nocontacts} id='nothingimg'></img><p>No contacts</p></div>}
</div>
</>)
}
export default Groupinfo;