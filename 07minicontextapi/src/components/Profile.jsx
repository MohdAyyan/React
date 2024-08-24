// import React, {useContext, useEffect} from 'react'
// import UserContext from '../context/UserContext'

// export default function Profile() {
//   const {user} = useContext(UserContext)
//   console.log('user:', user) // check if user is being updated

//   useEffect(() => {
//     console.log('Profile component re-rendered') // check if component is re-rendering
//   }, [user])

//   if (!user) return <div>please login</div>

//   return <div>Welcome {user.username}</div>
// }

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
