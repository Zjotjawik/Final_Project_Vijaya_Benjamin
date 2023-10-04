import React from 'react'
import { SymptomImagesComponent } from '../components/SymptomImagesComponent'

export const Ailments = ({ setCriteria, setResults, results }) => {
  return (
<>
  
<div>
      <SymptomImagesComponent setCriteria={setCriteria} setResults={setResults} results={results} />
    </div>
  </>
  )
}


// home.get('/ailments', (req, res) => {
//   res.send('Ailments')
// })  
