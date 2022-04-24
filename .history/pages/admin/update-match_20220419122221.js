import React from 'react'

const UpdateMatch = () => {
  return (
    <div>UpdateMatch</div>
  )
}

export default UpdateMatch 

export async function getServerSideProps() {
  await dbConnect();

  const predictions = await Prediction.find();

  return { props: { predictions: JSON.parse(JSON.stringify(predictions)) } };
}
