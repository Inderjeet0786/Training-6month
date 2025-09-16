import axios from 'axios';
import React, { useState } from 'react'
import { URL } from './Constant';

function Aiclient() {
  const [answer, setAnswer] = useState('');
  let [question, setQuestion] = useState('what is your name')
  const body = {
    contents: [
      {
        parts: [
          { text: question}
        ]
      }
    ]
  };

const askQuestion = () => {
  console.log('clicked');
  axios.post(URL, body,
    {
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": "AIzaSyDhuti0sJgOlrjjD-3FTL5dSMyob9fKQ98",
      },
    }
    )
    .then((res)=>{

      console.log(res.data?.candidates?.[0]?.content.parts?.[0]?.text);
      setAnswer(res.data?.candidates?.[0]?.content.parts?.[0]?.text);

    }
  )
  
}
return (
  <>
    <div className="container-fluid" >
      <div className="container-fluid" style={{ height: '500px' }}>

        <div className="col  d-flex" style={{ backgroundColor: '#B3C9AA', justifyContent: 'space-around' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="ChatGPT Logo"
            width={20}
            height={20}
          />
          <span>ChatGPT</span>
        </div>
        <pre>{answer}</pre>
      </div>
    </div>
    <h1 style={{ textAlign: 'center' }}>Chat With AI</h1>
    <div className="container-fluid d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <input type="text" value={question} style={{ width: "30%", borderRadius: '10px' }}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <button className='btn btn-success' onClick={askQuestion}>Send</button>
    </div>



  </>
)
}

export default Aiclient
