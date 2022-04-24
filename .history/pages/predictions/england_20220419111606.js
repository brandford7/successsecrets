import { Box } from '@chakra-ui/react'
import React from 'react'
import dbConnect from '../../lib/dbConnect'
import Prediction from "../../models/Prediction"

const England = ({predictions}) => {
  return (
    <><Box h='auto'>England</Box>
   <Pr
    </>
  )
}

export default England

export async function getStaticProps(){
  await dbConnect();

  const predictions = await Prediction.find({ country: 'Enlgand' })
  
  console.log(predictions)
  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };

}