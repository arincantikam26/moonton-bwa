import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';


export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, defaultValue, variant = "primary", placeholder, isError, ...props }, ref) {
    const input = ref ? ref : useRef();

    input.PropTypes = {
        type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        handleChange: PropTypes.func,
        placeholder: PropTypes.string,
        isError: PropTypes.bool,
    }


    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`
            }
            defaultValue={defaultValue}
            placeholder={placeholder}
            ref={input}
        />
    );
});

