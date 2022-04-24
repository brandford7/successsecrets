import { Box } from '@chakra-ui/react'
import React from 'react'
import Prediction from "../../models/Prediction"

const England = ({predictions}) => {
  return (
    <><Box h='auto'>England</Box>
      {predictions.map(prediction => <li key={prediction.match} >{prediction}</li>)}
    
    </>
  )
}

export default England

export async function getStaticProps(){
  const res = await Prediction.find({})
  const data = await res.json()
  return {
    props: {
  predictions:data
}}

}