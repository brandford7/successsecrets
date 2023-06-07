import { Heading } from '@chakra-ui/react';
import React from 'react'

const Title = ({name}) => {
  return (
    <>
          <Heading as='h2' color="whitesmoke" p="20px">{name}</Heading>
          
    </>
  );
}

export default Title