import React, { useRef, useState } from 'react'
import Web3 from 'web3';
import './Mainpage.css'
import './Main.css'

const Mainpage = () => {
    const web3 = new Web3('https://mainnet.infura.io/v3/a3ab70106b06488abf04ef778339eee4');
    const blockno = useRef()
    const [blockid,setBlockid] = useState(0);
    const [blockdata,setblockdata] = useState({})
    const [blockdatakey,setblockdatakey] = useState([]);
    const datasubmit = async(e) =>{
        e.preventDefault();

        web3.eth.getBlock(blockid, (error, block) => {
            if (error) {
              console.error(error);
            } else {
              console.log(block);
              setblockdata(block)
              console.log(Object.keys(block))
              setblockdatakey(Object.keys(block))


            }
          });



    }
    const handleOnChange = (e)=>{
        setBlockid(e.target.value)
    }
//
    // let data = blockdatakey.map(function(x,index)
    // {
    //   if(x!='transactions')
    //   {
    //     return(
    //       <>
    //         <table class="table table-striped">
    //           <tbody>
    //             <tr>
    //               <td>{x}</td>
    //               <td>{blockdata[x]}</td>
    //               <br/>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </>

    //     )

    //   }


    // })


  return (
    <>
    <form  onSubmit={datasubmit} action="/results" method='post'>
    <div className="mx-5 my-5">
        <label for="blockIdInputControl" className="form-label">Enter Block-Id/Block Hash Number</label>
        <input type="text" className="form-control" id="blockIdInputControl" placeholder="13148276" ref={blockno} onChange={handleOnChange}/>
        <div className="input_box button">
             <input type="submit" value="Search Block Data" id="button"/>
        </div>
        </div>
    </form>

      {
      blockdatakey.map(function(x,index)
      {
        if(x!='transactions' || x!='logsBloom')
        {
          return(
            <>
              <table className="table table-hover">
        ...             <thead>
                            <tr className="d19">
                            <th className="d19" scope="col"></th>
                            <th className="d19" scope="col">Companty</th>
                            <th className="d19" scope="col">Comunity</th>
                            <th className="d19"scope="col">Services</th>
                            </tr>
                         </thead>
                        <tbody>
                            <tr className="d19">
                            <th className="d19"scope="row">1</th>
                            <td className="d19">{x}</td>
                            <td className="d19">{blockdata[x]}</td>
                            </tr>
                                                   
                        </tbody>
                </table>  
            </>

          )

        }


      })

      }

        {/* <div className="datatodisplay">{data}</div> */}

    </>
  )
}

export default Mainpage
