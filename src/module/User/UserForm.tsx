import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import {Input }from '../../components/input';
import { ApiStatus, IUpdateUserActionProps, IUserForm } from './User.type';
import './UserForm.css';
import { createUserAction, resetCreateListStatus, updateUserAction } from './UserSlice';
import {useParams} from 'react-router-dom';

interface IProps {
    isEditFrom? : boolean
}

const UserForm = (props: IProps) => {
    const {isEditFrom} = props

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const params = useParams();
    const userIdToEdit = useRef(parseInt( params.id || "")) ;

    const {list} = useAppSelector((state: RootState) => state.user)
    useEffect(() => {
        if(isEditFrom && userIdToEdit.current ){
          const userData =  list.filter(x => x.id === userIdToEdit.current);
          if(userData.length){
            setName(userData[0].name);
            setEmail(userData[0].email);
          }
        }
    }, [isEditFrom])

    const {createUserFormStatus, updateUserFormStatus}= useAppSelector((state: RootState) => state.user)
    const dispatch =useAppDispatch()

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
        const data: IUserForm = {name, email};

        if(isEditFrom){
            const dirtyFormData : IUpdateUserActionProps = {id:userIdToEdit.current, data}
            dispatch(updateUserAction(dirtyFormData))
        }else{
            const data: IUserForm = {name, email};
            dispatch(createUserAction(data));
        }


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
                        <input type="submit" value={isEditFrom ? "Update" :"Create"}
                            disabled={createUserFormStatus === ApiStatus.loading || updateUserFormStatus === ApiStatus.loading}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserForm;