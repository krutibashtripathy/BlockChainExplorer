import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Web3 from 'web3';
import './main.css'

const Alltransactions = () => {
    const web3 = new Web3('https://mainnet.infura.io/v3/a3ab70106b06488abf04ef778339eee4');
    let blockdata = JSON.parse(localStorage.getItem("blockdata"))
    console.log(blockdata.blockdata.transactions.length)
    const [from,setfrom] = useState("")
    const [to,setto] = useState("")
    const [gas,setgas] = useState("")
  return (
    <>
       <h2><center>Total Transactions</center></h2>
       <button type="button" class="col2 btn btn-outline-primary mx-2"><Link className='col2' to="/">Back to Home</Link></button>
     <table class=" col1 table table-striped">
            <tbody>
              <tr>
                <th><p  className='transactionId'>Transaction-ID</p></th>
                <th><p className='transactionId'>From</p></th>
                <th><p className='transactionId'>To</p></th>
                <th><p className='transactionId'>Gas</p></th>
              </tr>
{
      blockdata.blockdata.transactions.map(function(x,index)
      {
        

        if(blockdata.blockdata.transactions.length!=0 )
        {
            web3.eth.getTransaction(x, (error, block) => {
                if (error) {
                  console.error(error);
                } else {
                  console.log(block); 
                  setfrom(block.from) 
                  setto(block.to)
                  setgas(block.gas)
                  
                             
                }
              });
              console.log(from,to)
          return(
            <>
              
                  <tr>
                    <td className="tableheading"><p className='pintable'>{x}</p></td>
                    <td className="tableheading"><p className='pintable'>{from}</p></td>
                    <td className="tableheading"><p className='pintable'>{to}</p></td>
                    <td className="tableheading"><p className='pintable'>{gas}</p></td>
                    <br/>
                  </tr>
                
            </>

          )

        }else{
            return(
                <>
                <h1>No transaction found</h1>
                <Link to="/">Back to Home</Link>
                </>
            )
        }


      })

      }
            </tbody>
     </table>
      
    </>
  )
}

export default Alltransactions
