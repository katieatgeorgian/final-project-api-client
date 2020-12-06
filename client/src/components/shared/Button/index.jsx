import React from 'react';
import Styles from './styles';

const Button = ({ label, href, className }) => {
    try {

        if (!label || !href) {
            throw new Error(`You are missing a required attribute (label, href, or className)`);
        }

        //Return your JSX element
        return (
            <Styles.Button as="a" className={className} href={href}>{label}</Styles.Button>
        );
    } catch (error) {
        console.error(error.message);
        console.error(error.stack);

        return null;
    }
    
};

export default Button;