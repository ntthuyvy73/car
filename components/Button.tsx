import { ButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const Button = ({
    title,
    type = "button",
    variant = "primary",
    leftIcon,
    rightIcon,
    classes,
    handleClick,
}: ButtonProps) => {
    let styles =
        "relative min-w-[130px] py-3 px-6 flex justify-center items-center rounded-full ";
    if (variant === "primary") {
        styles += "bg-primary-blue text-white";
    } else if (variant === "outlined") {
        styles += "bg-white border  border-primary-blue text-primary-blue";
    }

    if (classes) styles = styles + " " + classes;
    return (
        <button type={type} className={styles} onClick={handleClick}>
            <p className="flex-1">{title}</p>
            {rightIcon && (
                <Image
                    src={rightIcon}
                    alt="right-icon"
                    width={20}
                    height={20}
                    priority
                    className="absolute right-3 object-contain"
                />
            )}
        </button>
    );
};

export default Button;
