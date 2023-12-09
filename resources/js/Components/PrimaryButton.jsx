import React from "react";
export default function PrimaryButton({ className = '', disabled, children,  ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center w-full ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
