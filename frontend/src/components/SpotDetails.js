import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from '../store/Spots';
import EditSpotForm from './EditFormSpot';

export const SpotDetail = ()=>{
    const {spotId} = useParams();
    //const spot = useSelector(state =>console.log(state.spot,"STATE SPOTDETAILDFDF"));
    const spot = useSelector(state =>state.spot[spotId]);
//    console.log(spot,"SPOT")
const dispatch = useDispatch();
const [showEditForm,setshowEditForm] = useState(false)
const [editId,setEditId]=useState(null)
useEffect(()=>{
    dispatch(getOneSpot(spotId));
    setshowEditForm(false);
    setEditId(null)
},[dispatch,spotId])

if(!spot)return null;
let content= null;
if(showEditForm){
    content =(
        <EditSpotForm
        spot ={spot}
        hideForm={()=>setshowEditForm(false)}
        />
    )
}

}