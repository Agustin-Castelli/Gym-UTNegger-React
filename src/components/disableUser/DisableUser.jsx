import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../api';
import "./disableUser.css"
import { useContext } from 'react';
import { modeContext } from '../../context/ModeContext';
const DisableUser = () => {
    const [filtro, setFiltro] = useState('');
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([])

    const {mode} = useContext(modeContext)

    useEffect(() => {
        fetch(`${API_BASE_URL}/Admin/GetUsersAvailable`,
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



    const handleDisable = async (email) => {
        try {
            //alert(email)
            // alert(`${API_BASE_URL}/Admin/DisableUser/DisableUser/${email}`)
            const response = await fetch(`${API_BASE_URL}/Admin/DisableUser/${email}`, {
                method: 'DELETE',
                headers: {
                    // "Content-Type": "application/json",
                    // "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                },

            });

            if (!response.ok)
                throw new Error("Error Inesperado")
            setUsers(prev=>prev.filter(x=>x.email!=email))
            alert('Usuario desactivado correctamente.');



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
                        handleDisable(x.email)
                    }} >

                        <p>{x.name}</p>
                        <p>{x.email}</p>
                        <p>{x.type}</p>
                    </div>)}
            </div>



        </div>
    );
};

export default DisableUser;