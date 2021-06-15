import { useState } from "react";

const UserSearch: React.FC = () => {
  const users = [
    {name: 'Brandon', age: 31 },
    {name: 'Brenda', age:31},
    {name: 'Shawn', age:32},
    {name: 'Kristelle', age: 30}
  ]

  const [search, setSearch] = useState('');
  // const [user, setUser ] = useState<{name: String, age: number}>()
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

  // const onClick = () =>{
  //   const foundUser= users.find(user =>{
  //     return user.name === search;
  //   })
  //    setUser(foundUser);
  // }

  return <div>
    <h1>User Search</h1>
    <input value={search} onChange={(e) => setSearch(e.target.value)}/>
    {filteredUsers.map((user, idx) => (
      <div key={idx}>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
        </ul>
      </div>
    ))}
  </div>
}

export default UserSearch;