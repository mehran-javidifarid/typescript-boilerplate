import React, {FC} from "react";
import {FilledInput, FormControl, InputAdornment, TextField} from '@mui/material';
import {makeStyles} from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import FormattedInput from "./input-seprator";

const useStyles = makeStyles(() => ({
    cssLabel: {
        height: '46px',
    }
}));

interface ComponentProps {
    inputRef?: any
    name: string
    type?: string
    placeholder?: string,
    onChange?: any,
    adornment?: any,
    endAdornment?: any,
    style?: string,
    onClear?: any,
    classes?: any,
    defaultValue?: any,
    separate?: any
    value?: any
    maxLength?: number
    center?: boolean
    label?: string
}

const CInput: FC<ComponentProps> = (
    {
        onChange, inputRef, name, type = 'text', placeholder, adornment,
        style = 1, onClear, classes, defaultValue, separate, value, maxLength = 80,
        endAdornment, center = false, label
    }
) => {
    const useclasses = useStyles();

    const inputSeparator = (
        <FormattedInput
            inputRef={inputRef} type={type} autoComplete={'false'} aria-autocomplete={'none'} name={name}
            id={'formatted-numberformat-input'} className={`w-120 rtl`} placeholder={placeholder}
            onChange={onChange} defaultValue={defaultValue} initialValue={value} center={center}
        />
    )

    const inputLength = (
        <TextField
            inputRef={inputRef} type={type} autoComplete={'false'} aria-autocomplete={'none'} name={name} id={name}
            placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} label={label}
            onInput={(e: any) => {
                e.target.value = e.target.value.toString().slice(0, maxLength)
            }} variant={'outlined'}
            inputMode={type === 'number' ? 'decimal' : "text"} fullWidth value={value}
            // className={useclasses.cssLabel}
            // InputProps={{
            //     classes: {
            //         notchedOutline: useclasses.cssLabel
            //     },
            // }}
        />
    )

    const input = (
        <FilledInput
            inputRef={inputRef} type={type} autoComplete={'false'} aria-autocomplete={'none'} name={name} id={name}
            className={``} placeholder={placeholder} onChange={onChange}
            defaultValue={defaultValue}
            startAdornment={adornment ? <InputAdornment position="start">{adornment}</InputAdornment>
                : onClear && <CloseIcon style={{color: 'rgb(68 68 68)'}} onClick={() => onClear(name)}/>}
            endAdornment={
                endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> :
                    onClear && <CloseIcon style={{color: 'rgb(68 68 68)'}} onClick={() => onClear(name)}/>
            } value={value}
            inputProps={{autoComplete: 'off', inputMode: type === 'number' ? 'decimal' : 'text'}} fullWidth
        />
    )

    return (
        <FormControl variant="outlined" fullWidth
            // className={useclasses.cssLabel}
        >
            {separate && inputSeparator}
            {maxLength < 99 && inputLength}
            {(maxLength === 99 && !separate) && input}
        </FormControl>
    )
};

export default CInput
