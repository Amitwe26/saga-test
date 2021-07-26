import React, { useState } from 'react'

export function NewUserFrom({onCreateUser}) {
    const [user, setUser] = useState({ firstName: '', lastName: '' })

    const handleName = (ev) => {
        const { name, value } = ev.target
        const newUser = { ...user }
        newUser[name] = value
        setUser(newUser)
    }

    const  onHandleSubmit = (ev) => {
        ev.preventDefault()
        console.log(user);
        onCreateUser(user)
        setUser({ firstName: '', lastName: '' })
     }

    return (
        <div>
            <form onSubmit={(ev)=>onHandleSubmit(ev)}>
                <input type="text" value={user.firstName} autoComplete="off" placeholder="First name" name="firstName" onChange={(ev) => handleName(ev)} />
                <input type="text" value={user.lastName} autoComplete="off" placeholder="Last name" name="lastName" onChange={(ev) => handleName(ev)} />
                <button hidden type="submit">send</button>
            </form>
        </div>
    )
}
