import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedCommande({children,TotalPrice}) {
    if (TotalPrice) {
     return children
    } else {
        return <Navigate to={'/Cart'} />
    }


}

export default ProtectedCommande