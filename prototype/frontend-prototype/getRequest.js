import './Card.scss'
import useFetch from "hooks/useFetch";
import moment from 'moment';
import Card from "./Card";

const formatDate = (datetime) => {
    if (!datetime) return null;
@@ -13,12 +14,29 @@ const formatDate = (datetime) => {

const CardList = () => {
    //Fetch data from backend serve
    const {data, isPending, error} = useFetch('finder/api/event/get'); 

    <div className="testing">
        <div>

    console.log(data);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error)
        return <div><h1>Oops! There isn't any event now!</h1></div>;
    }
    return (
        <div className="testing">
            {data && data.event.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>Start Time: {formatDate(item.startTime)}</p>
                    <p>End Time: {formatDate(item.endTime)}</p>
                </div>
            ))}
        </div>
    </div>
    );

}