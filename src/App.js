import React, { useRef, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TestStrings from "./TestStrings";

const App = () => {
  const [typed, updTyped] = useState('');
  const [totype, updTotype] = useState('Click On The Start Button To Begin 😋 ..');
  const [btnText, upd_btnText] = useState('Start');
  const startTime = useRef(new Date().getTime());
  const endTime = useRef(new Date().getTime());
  // console.log(startTime);
  // console.log(endTime);

  

  const clicked = () => {

    if (btnText === 'Start') {
      upd_btnText('Done');
      let ran_index = Math.floor((Math.random() * TestStrings.length));
      updTotype(TestStrings[ran_index]);
      startTime.current = new Date().getTime();
    }
    else {
      endTime.current = new Date().getTime();
      // console.log(startTime);
      // console.log(endTime);
      // console.log(typeof(startTime));
      // console.log(typeof(endTime));
      let time = Math.floor((endTime.current - startTime.current) / 1000);
      console.log('x = ' + time);
      upd_btnText('Start');
      const str_typed = typed;
      const str_totype = totype;
      let total_wrds_typed = 0, total_wrds_totype = 0, i;

      for (let i = 0; i < str_totype.length; i++)
        if (str_totype[i] === ' ' || i === str_totype.length - 1)
          total_wrds_totype++;

      for (let i = 0; i < str_typed.length; i++)
        if (str_typed[i] === ' ' || i === str_typed.length - 1)
          total_wrds_typed++;

      const wrd_per_min = Math.floor(total_wrds_typed / time * 60);
      let correct_wrds_typed = 0;

      for (i = 0; i < str_typed.length; i++) {
        if (str_typed[i] === str_totype[i]) {
          if (str_typed[i] === ' ' || i === str_typed.length - 1)
            correct_wrds_typed++;
        }
        else {
          break;
        }
      }
      updTotype(`Your Typing Speed is ${wrd_per_min} words per min. You have typed ${correct_wrds_typed} correct words out of ${total_wrds_totype}.`);
      // timer = 0;

    }
  }

  return (
    <>
      <div className="background">
        <div className="heading">
          <h2 className="heading-text">Welcome To Typing Speed Test</h2>
        </div>
        <div className="result-or-write">
          <h4 className="result-or-write-text">{totype}</h4>
        </div>
        <div className="txt-area-div">
          <textarea className="form-control txt-ar" id="exampleFormControlTextarea1" placeholder="Write the above text here .." value={typed} onChange={(event) => { updTyped(event.target.value) }}></textarea>
        </div>
        <button type="button" className="btn btn-secondary mt-3" onClick={clicked}>{btnText}</button>
      </div>
    </>
  );
}

export default App;
