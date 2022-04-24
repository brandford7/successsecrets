import React from 'react'

const UpdateMatch = () => {
  return (
    <UpdateMatchForm/>
  )
}

export default UpdateMatch 

UpdateMatch.getLayout = function getLayout(page) {
  return <>{page}</>;
};
