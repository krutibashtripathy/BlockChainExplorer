import React from 'react'
import './main.css'
const Main2 = () => {
  return (
    <div>
                
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
                            <td className="d19">Mark</td>
                            <td className="d19">Otto</td>
                            <td className="d19">@mdo</td>
                            </tr>
                            <tr className="d19">
                            <th className="d19" scope="row">2</th>
                            <td className="d19">Jacob</td>
                            <td className="d19">Thornton</td>
                            <td className="d19">@fat</td>
                            </tr>
                            <tr className="d19">
                            <th className="d19" scope="row">3</th>
                            <td className="d19" colspan="2">Larry the Bird</td>
                            <td className="d19">@twitter</td>
                            </tr>
                        </tbody>
                </table>  
    </div>
  )
}

export default Main2
