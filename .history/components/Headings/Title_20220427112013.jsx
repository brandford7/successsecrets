import { Heading } from '@chakra-ui/react';
import React from 'react'

const Title = ({name}) => {
  return (
    <>
          <Heading col p="20px">{name}</Heading>
          
    </>
  );
}

export default Title