import { Box } from '@chakra-ui/react'
import React from 'react'
import Prediction from "../../models/Prediction"

const England = ({predictions}) => {
  return (
    <><Box h='auto'>England</Box>
      {predictions.data.map(prediction => <li key={prediction.match} >{prediction}</li>)}
    
    </>
  )
}

export default England

export async function getStaticProps(){
  await dbConnect()
  const res = await Prediction.find({ country: 'Enlgand' })
  const data = await res.json()
  console.log(data)
  return {
    props: {
  predictions:data
}}

}