import { Box } from '@chakra-ui/react'
import React from 'react'
import moment from 'moment';
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
      $gte: moment().startOf(new Date()),
      $lte: moment().endOf(new Date()),
    },
  });
  

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };

}