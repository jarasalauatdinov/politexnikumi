import React, { useEffect, useState } from 'react'
import FormEmployee from './Form';
import { api } from '../../api/api';

const UpdateEmployee = ({ id }) => {
    const [data, setData] = useState(null);

    async function getEmployee() {
        try {
            const { data } = await api.get(`/employees/${id}`);
            setData(data.data.item);
        } catch (error) {
            console.error("Error fetching employee:", error);
        }
    }

    useEffect(() => {
        getEmployee();
    }, [id]);

    async function updateFn(body) {
        try {
            await api.put(`/employees/${id}`, body);
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    }

    if (!data) return <p>Loading...</p>;

    return (
        <FormEmployee
            key={id}
            submitFn={updateFn}
            initialValues={{
                full_name: {
                    ru: data.full_name?.ru || "",
                    uz: data.full_name?.uz || "",
                    en: data.full_name?.en || "",
                    kk: data.full_name?.kk || "",
                },
                phone: data.phone || "",
                photo: null, // fayl bo‘lsa yangilash uchun null qoldiramiz
                email: data.email || "",
                position: {
                    ru: { name: data.position?.ru?.name || "", description: data.position?.ru?.description || "" },
                    uz: { name: data.position?.uz?.name || "", description: data.position?.uz?.description || "" },
                    en: { name: data.position?.en?.name || "", description: data.position?.en?.description || "" },
                    kk: { name: data.position?.kk?.name || "", description: data.position?.kk?.description || "" },
                },
                birth_date: data.birth_date || "",
            }}
        />
    )
}

export default UpdateEmployee
