import { Box } from '@chakra-ui/react'
import { endOfDay, startOfDay } from 'date-fns'
import React from 'react'
import PredictionTable from '../../components/tables/PredictionTable'
import dbConnect from '../../lib/dbConnect'
import Prediction from "../../models/Prediction"

const England = ({predictions}) => {
  return (
    <><Box overflow='hidden' h='auto'>England</Box>
     <PredictionTable predictions={predictions}/>
    
    </>
  )
}

export default England

export async function getStaticProps(){
  await dbConnect();

  const predictions = await Prediction.find({
    country: "England",
    start_date: {
      $gte: moment().startOf("day"),
      $lte: moment().endOf("day"),
    },
  });
  

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };

}