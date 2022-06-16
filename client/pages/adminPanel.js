import React from 'react';
import AdminComponent from "../containers/pages/Admin"
import MainLayout from "../containers/Layout/mainlayout"


const AdminPanel=()=>{
    
    return (

        <AdminComponent/>
    )
}

AdminPanel.layout=(children)=>{
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
};

export default AdminPanel;