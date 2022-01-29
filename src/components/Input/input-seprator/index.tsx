import React, {FC, useEffect, useState} from 'react';
import NumberFormat from 'react-number-format';
import {TextField} from '@mui/material';

function NumberFormatCustom(props: any) {
    const {inputRef, onChange , ...other} = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
}

const InputSeparator: FC<any> = ({inputRef, type, name, id, className, placeholder, onChange,initialValue, defaultValue , center}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(initialValue)
    },[initialValue])

    const handleChange = (event: any) => {
        onChange(event)
        setValue(event.target.value);
    };

    return (
        <TextField
            type={type}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue}
            // @ts-ignore
            value={value}
            onChange={handleChange}
            className={"w-100 rtl centerinput"}
            aria-autocomplete={'none'}
            autoComplete={'false'}
            name={name}
            inputRef={inputRef}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
}

export default InputSeparator
