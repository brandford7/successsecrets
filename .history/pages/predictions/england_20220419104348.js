import { Box } from '@chakra-ui/react'
import React from 'react'

const England = () => {
  return (
    <><Box h='auto'>England</Box>
    
    
    </>
  )
}

export default England

export async function getStaticProps(){
const result = await Prediction.find({})
  return {
    props: {
  
}}

}