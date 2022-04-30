import { Box } from '@chakra-ui/react'
import { endOfDay, startOfDay } from 'date-fns'
import React from 'react'
import Title from '../../components/Headings/Title'
import PredictionTable from '../../components/tables/PredictionTable'
import dbConnect from '../../lib/dbConnect'
import Prediction from "../../models/Prediction"

const England = ({predictions}) => {
  return (
    <>
      <Box overflow="hidden" h="auto">
        
          <Title name="England" />
          <PredictionTable predictions={predictions} />
        
        
      </Box>
    </>
  );
}

export default England

export async function getStaticProps(){
  await dbConnect();

  const predictions = await Prediction.find({
    country: "England",
    start_date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  });
  

  return {
    props: {
      predictions: JSON.parse(JSON.stringify(predictions)),
    },
  };

}