import React, {FC} from "react";
import {Button, LinearProgress} from '@mui/material';
import {makeStyles} from '@mui/styles';

interface IBtnPublic {
    progress?: boolean
    onClick?: any
    disabled?: boolean
    flavor?: number
    variant: 'contained' | 'outlined' | 'text'
    color?: 'primary' | 'default' | 'inherit' | 'secondary'
    fullWidth?: boolean
    type?: 'button' | 'reset' | 'submit'
    style?: any
}

const useStyle = makeStyles({
    style: {
        height: '46px',
        borderRadius: '10px',
    },
    'type4': {
        width: "100%",
        marginTop: "20px",
        boxShadow: "inset 0 0 10px 0 rgba(0, 0, 0, 0.41)",
        backgroundColor: "#03b363"
    },
    'type5': {
        backgroundColor: '#03b363',
        width: '100%',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#65dfa7'
        },
        borderRadius: '6px',
    },
    'type6': {
        backgroundColor: 'inherit',
        width: '100%',
        color: '#fff',
        borderRadius: '6px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'inherit',
            boxShadow: 'none',
        },
    },
    'type7': {
        background: ' linear-gradient(to top, #23e8f6, #8fecff -6%)',
        width: '100%',
        color: '#000',
        borderRadius: '6px',
        boxShadow: 'none',
        '&:hover': {
            background: ' linear-gradient(to top, #23e8f6, #8fecff -6%)',
            boxShadow: 'none',
        },
        
    },
    'type8': {
        backgroundColor: '#f6a423',
        width: '100%',
        color: '#fff',
        borderRadius: '6px',
        boxShadow: 'none',
        '&:hover': {
            background: '#f6a423',
            boxShadow: 'none',
        },
    }
})

const CButton: FC<IBtnPublic> = (
    {
        variant,
        progress = false,
        children = null,
        flavor = 1,
        onClick,
        disabled = false,
        color,
        fullWidth,
        type = 'button',
        style
    }
) => {
    const classes = useStyle()
    return (
        <>
            <Button
                type={type}
                variant={variant}
                onClick={onClick}
                disabled={progress === true ? progress : disabled}
                // @ts-ignore
                className={`btn-public ${classes.style} ${classes[`type${progress === true ? 4 : flavor}`]}`}
                fullWidth={fullWidth}
                style={style}
                
            >
                {children}
            </Button>
            {progress && <div className="LinearProgress"><LinearProgress/></div>}
        </>
    );
}

export default CButton
