import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function UsersList({onDeleteUser}) {
    const { items } = useSelector(state => state.users)
    return (
        <div className="container-list" >
            {items?.map(user => {
                return (
                    <div className="user-preview"
                        key={user.id}>
                        <div style={{ margin: '0 auto' }}>
                            <p> {user.firstName} {user.lastName}</p>
                            <button style={{ color: 'red', cursor: 'pointer' }}
                                onClick={() => onDeleteUser(user.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
