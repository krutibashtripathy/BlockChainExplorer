import React, { useRef, useState } from 'react';
import  { Link }  from 'react-router-dom';
import Web3 from 'web3';
import './main.css'

 const Main = () => {
    
        const web3 = new Web3('https://mainnet.infura.io/v3/a3ab70106b06488abf04ef778339eee4');
        const blockno = useRef()
        const [blockid,setBlockid] = useState(0);
        const [blockdata,setblockdata] = useState({})
        const [status,setStatus] = useState(0)
        localStorage.setItem("blockdata",JSON.stringify({blockdata}))
        const [blockdatakey,setblockdatakey] = useState([]);
        const datasubmit = async(e) =>{
            e.preventDefault();
            console.log("helooooooooooooooooo")
            web3.eth.getBlock(blockid, (error, block) => {
                if (error) {
                  console.error(error);
                } else {
                  console.log(block);
                  if(block != 'null')
                  {
                    console.log(Object.keys(block))
                    setblockdatakey(Object.keys(block))
                    setblockdata(block)
                    setStatus(1)
                  }   
    
                }
              });
       
    
        }
        const handleOnChange = (e)=>{
            setBlockid(e.target.value)
        }
       
  return (
    <>
    <div className='d1 me-50 mx-2'>
        <h1 className='d2'>Explore Transaction Details</h1>
        <div className=" d5 input-group mb-3">
        <input type="search" className="form-control" placeholder="Search by Block Number or Block Hash" aria-label="Recipient's username" ref={blockno} onChange={handleOnChange} aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="submit" onClick={datasubmit} id="button-addon2">Search</button>
        </div>
          <div>
            <h1 id='info'></h1>
          </div>
        <table class="table table-striped">
                <tbody>
        {
      blockdatakey.map(function(x,index)
      {
        if(x!='transactions' )
        {
          return(
            <>
              
                  <tr>
                    <td className="tableheading"><p className='pintable'>{x}</p></td>
                    <td className="tabledata"><p className='pintable'>{blockdata[x]}</p></td>
                    <br/>
                  </tr>
                
            </>

          )

        }
        else{
            return(
                <>
                  
                  <tr>
            <td className="tableheading"><p className='pintable'>{x}</p></td>
            <td className="tabledata"><p className='pintable'>{blockdata[x].length}</p><Link to="/transactions">Click to view all transaction details</Link></td>
            <br/>
          </tr>
                    
                </>
    
              )
            
        }


      })

      }
      </tbody>
              </table>
    </div>
    
    </>
  )
}

export default Main
