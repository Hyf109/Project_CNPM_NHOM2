import React from "react"
import './Card.scss'
import useFetch from "hooks/useFetch";
import moment from 'moment';

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');

    return formattedDate;
}

const CardList = () => {
    //Fetch data from backend serve

    <div className="testing">
        <div>
            
        </div>
    </div>
    
}
 
export default CardList;