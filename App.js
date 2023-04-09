
import React from 'react';
function Ans1(probs)
{  let x=probs.x1;
    let y=probs.x2;
    let z=probs.x3;
    return (<>
    <div className='box1'>
    <div className='box2'>
    <div> {x} {y} {z} </div>
    <div> These are Matching </div>
    <hr/>
   </div>
    </div>
    
    </>);
}
function Ans2(probs)
{
    let x=probs.x1;
    let y=probs.x2;
    let z=probs.x3;
    return (<>
    <div className='box1'>
    <div className='box2'>
    <div> {x} {y} {z} </div>
    <div> These are not  Matching </div>
    <hr/>
    </div>
    </div>
    </>);
}
function Card(probs)
{
    let x=probs.x;
    let y=probs.y;
    let z=probs.z;
     if( {x} ==={y} && {y}==={z} && {z} ==={x})
   {
    return (<><Ans1 x1={x} x2={y} x3={z}/></>);
    
   }
   else
   {
    return (<><Ans2 x1={x} x2={y} x3={z}/></>);
   }

  

}
export {Card};