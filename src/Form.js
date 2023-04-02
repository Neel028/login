import React from 'react';
import './form.css';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { color } from 'framer-motion';

function Form() {
    return (
        <div className='img'>
            <center>
            <FormControl  py={50}>
                <FormLabel color="white" fontSize="30" textAlign="center">Sign Up</FormLabel>
            </FormControl>
            <FormControl py={3}>
                <Input color="white" border="2px solid black" w="sm" placeholder='First name' Required />
            </FormControl>
            <FormControl w="sm" py={3}>
                <Input color="white" border="2px solid black" placeholder='Last name' required />
            </FormControl>
            <FormControl w="sm" py={3}>
                <Input type='email' color="white" border="2px solid black" placeholder='E-mail' required />
            </FormControl>
            <FormControl w="sm" py={3}>
                <Input type='password' color="white" border="2px solid black" placeholder='Password' required />
            </FormControl>
            <FormControl w="sm" py={3}>
                <Input type='password' color="white" border="2px solid black" placeholder='Confirm Password' required />
            </FormControl>
            <Button my={10} colorScheme='blue'>Submit</Button>
            </center>
        </div>
    )
}

export default Form
