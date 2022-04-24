import { Box } from '@chakra-ui/react'
import React from 'react'
import dbConnect from '../../lib/dbConnect'
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
  await dbConnect();

  const predictions = await Prediction.find({ country: 'Enlgand' }).lean()
  
  console.log(t)
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(tests)),
    },
  };

}