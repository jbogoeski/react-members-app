import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Members from './components/Members';
import AddMember from './components/AddMember';


function App() {
  const [showAddMember, setShowAddMember] = useState(false)
  const [members, setMembers] = useState([])


  useEffect(() => {
    console.log(getLocalTodos())
    // getLocalMembers()
  }, []);

  // Use Effect
  useEffect(() => {
    saveLocalMembers();
  }, [members]);
  
  // Add Member
    const addMember = (member) => {
      const id = Math.floor(Math.random() * 10000) + 1

      const newMember = { id, ...member }
      setMembers([...members, newMember])
    
    }

  // Delete Member
  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  }

  // Toggle Active
  const toggleActive = (id) => {
    setMembers(members.map((member) => member.id === id ? { ...member, active: !member.active } : member));
  }


    // save to local
    const saveLocalMembers = () => {
      localStorage.setItem('members', JSON.stringify(members));
    };
    const getLocalTodos = () => {
      if(localStorage.getItem('members') === null){
        localStorage.setItem('members', JSON.stringify([]));
      } else {
        let memberLocal = JSON.parse(localStorage.getItem('members'));
        setMembers(memberLocal);
      }
    };
  

  return (
    <div className="container">
      <Header onAdd={() => setShowAddMember(!showAddMember)} showAdd={showAddMember} />
      {showAddMember && <AddMember onAdd={addMember} />}
      {members.length > 0 ? <Members members={members} onDelete={deleteMember} onToggle={toggleActive} /> : 'No Members'}
    </div>
  );
}

export default App;
