import { useState } from 'react';

const AddMember = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [active, setActive] = useState(false);

    const onSubmit= (e) => {
        e.preventDefault();

        if(!name) {
            alert('Please add a member')
            return
        }
        onAdd({ name, number, active })
        
        setName('')
        setNumber('')
        setActive(false)
        
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Member</label>
                <input type="text" placeholder="Add Member"
                value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Number</label>
                <input type="text" placeholder="Add Number" 
                value={number} onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Active</label>
                <input 
                type="checkbox"
                checked={active} 
                value={active} onChange={(e) => setActive(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Member" className="btn btn-block" />
        </form>
    )
}

export default AddMember
