import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../api';
import "./restoreUser.css"
import { useContext } from 'react';
import { modeContext } from '../../context/ModeContext';
const RestoreUser = () => {
    const [filtro, setFiltro] = useState('');
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([])

    const {mode} = useContext(modeContext)

    useEffect(() => {
        fetch(`${API_BASE_URL}/Admin/GetUsersNotAvailable`,
            {

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                },


            }
        )
            .then((res) => {
                if (!res.ok)
                    throw new Error("Error Inesperado")
                return res.json()
            })
            .then((data) => {
                setUsers(data)
            })
            .catch((e) => {
                alert(e)
            })
    }, [])



    const handleRestore = async (email) => {
        try {
            //alert(email)
            // alert(`${API_BASE_URL}/Admin/DisableUser/DisableUser/${email}`)
            const response = await fetch(`${API_BASE_URL}/Admin/activate-user/${email}`, {
                method: 'PUT',
                headers: {
                    // "Content-Type": "application/json",
                    // "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                },

            });

            if (!response.ok)
                throw new Error("Error Inesperado")
            setUsers(prev=>prev.filter(x=>x.email!=email))
            alert('Usuario Activado correctamente.');



        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={`div-disableUser ${mode?"users-disableUser-dark":""}`}>
            <h2>Filtro</h2>
            <input
                type="text"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />

            <div className={`div-de-users-disableUser`}>
                {users.filter(x => x.name.toLowerCase().includes(filtro.toLowerCase()))
                    .map(x => <div className={`users-disableUser ${mode?"users-disableUser-dark":""}`} onClick={() => {
                        handleRestore(x.email)
                    }} >

                        <p>{x.name}</p>
                        <p>{x.email}</p>
                        <p>{x.type}</p>
                    </div>)}
            </div>



        </div>
    );
};

export default RestoreUser;