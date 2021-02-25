import Member from './Member';

const Members = ({ members, onDelete, onToggle }) => {
   
    return (
        <>
            {members.map((member) => (
                <Member 
                    key={member.id} 
                    member={member} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                />
            ))}
        </>
    )

}

export default Members
