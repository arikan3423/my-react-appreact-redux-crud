import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import {Input }from '../../components/input';
import { ApiStatus, IUserForm } from './User.type';
import './UserForm.css';
import { createUserAction, resetCreateListStatus } from './UserSlice';


const UserForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const {createUserFormStatus}= useAppSelector((state: RootState) => state.user)
    const dispatch =useAppDispatch()

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()

        const data: IUserForm = {name, email}
        dispatch(createUserAction(data))
    }

    useEffect(() => {
        if(createUserFormStatus === ApiStatus.success) {
            setName("")
            setEmail("")
            dispatch(resetCreateListStatus());
        }

    }, [createUserFormStatus])
    return (
        <div className="contanier">
            <form onSubmit={onSubmitForm}>
                <Input label='Name :' value={name} onChange={(e: ChangeEvent<HTMLInputElement>)=> {
                    setName(e.target.value);
                }}/>
                <Input label='Email :' value={email} onChange={(e: ChangeEvent<HTMLInputElement>)=> {
                    setEmail(e.target.value);
                }} />
                <div>
                    <div className='btn-wrapper'>
                        <input type="submit" value="Create" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserForm;