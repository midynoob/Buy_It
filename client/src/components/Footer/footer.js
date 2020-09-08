import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor: '#343a40'
        }}>
           <p style={{color: 'white'}}> Happy Coding </p>
        </div>
    )
}

export default Footer