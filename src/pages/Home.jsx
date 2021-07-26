import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/userAction'
import { NewUserFrom } from '../cmps/NewUserFrom'
import { UsersList } from '../cmps/UsersList'

export function Home() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsersRequest())
    }, [])

    const onCreateUser = (user) => {
        console.log(user);
        dispatch(createUserRequest(user))
    }

    const onDeleteUser = (userId) => {
        console.log('userId', userId);
        dispatch(deleteUserRequest(userId))
    }

    return (
        <div >
            <NewUserFrom onCreateUser={onCreateUser} />
            <UsersList onDeleteUser={onDeleteUser} />
        </div>
    )
}
