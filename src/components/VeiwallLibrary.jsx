import React from 'react'
import NavBar from './NavBar'

const VeiwallLibrary = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">title</th>
                                    <th scope="col">author</th>
                                    <th scope="col">publishedyear</th>
                                    <th scope="col">price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ends with us</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <th scope="row">atomic habits</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <th scope="row">book of knights</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>102</td>
                                </tr>
                                <tr>
                                    <th scope="row">wings of fire</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>105</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VeiwallLibrary