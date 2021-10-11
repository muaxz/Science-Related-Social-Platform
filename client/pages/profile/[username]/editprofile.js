import React from 'react'
import Mainlayout from '../../../containers/Layout/mainlayout'
import Routerguard from '../../../containers/Layout/routerguard'

export default function Editprofile() {
    return (
        <div>
            edit profile.
        </div>
    )
}

Editprofile.layout=(children)=>{

    return (
        <Mainlayout>
            <Routerguard>
                <React.Fragment>
                   {children}
                </React.Fragment>
            </Routerguard>
        </Mainlayout>
    )

}


