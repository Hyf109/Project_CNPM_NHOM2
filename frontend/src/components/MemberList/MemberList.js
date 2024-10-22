import useFetch from "hooks/useFetch";
import './MemberList.scss';
import { useNavigate } from "react-router-dom";

const MemberList = ({event_id}) => {
    const navigate = useNavigate();

    const {data, isPending, error} = useFetch(`finder/api/event/get/${event_id}`);
    
    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {data && ( 
                <>
                    <div className="member-list">
                        <div className="member-list-host">
                            <h2>Event's Host: {" " + data.event[0].host_name}</h2>
                        </div>
                        {data.event[0].member_list.map((member) => {
                            console.log(member);
                            // if (member.member_id !== data.event[0].host_id) {
                                return (
                                    <div onClick={() => navigate(`/profile/${member.member_id}`)} className="member-list-card" key={member._id}>
                                        {member.username}
                                    </div>
                                );
                            // }
                            return null;
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
 
export default MemberList;
