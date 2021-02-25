import { FaTimes } from 'react-icons/fa'

const Member = ({ member, onDelete, onToggle }) => {
    return (
        <div className={`member ${member.active ? 'reminder' : ''}`} onDoubleClick={() => 
        onToggle(member.id)}>
            <h3>
                {member.name}{' '} 
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(member.id)} 
                />
            </h3>
            <p>{member.number}</p>
        </div>
    )
}

export default Member
