import { Box } from '@chakra-ui/react'
import React from 'react'

const England = ({predictions}) => {
  return (
    <><Box h='auto'>England</Box>
    {predictions.map(prediction=><li></li><)}
    
    </>
  )
}

export default England

export async function getStaticProps(){
  const result = await Prediction.find({})
  const data = await res.json()
  return {
    props: {
  predictions:data
}}

}