import React, { Component } from 'react'
import './styles.css'
import DataTable from 'react-data-table-component';

export class clientes extends Component {

    render() {
        return (
            <div class="container">
                <div class="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="storefront-outline"></ion-icon></span>
                                <span class="title">SISTEMA-QA</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span class="title">Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                                <span class="title">Clientes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="cart-outline"></ion-icon></span>
                                <span class="title">Productos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                                <span class="title">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                                <span class="title">Mensajes</span>
                            </a>
                        </li>
                    </ul>
                </div>

                    
                    <div class="main">
                        <div class="topbar">
                           
                            <div class="search">
                                    <label>
                                        <input type="text" placeholder="Buscador" />
                                        <ion-icon name="search-outline"></ion-icon>
                                    </label>
                            </div>
                        </div>
                        
                    <div class="details">
                        <div class="recentOrders">
                            <div class= "cardHeader">
                                <h2>CLIENTES</h2>
                            </div>
                            <table id="example">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>ACCIONES DE LISTA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Michael Silva</td>
                                        <td>Marketing Designer</td>
                                        <td>London</td>
                                        <td>66</td>
                                        <td>2012/11/27</td>
                                        <td>$198,500</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paul Byrd</td>
                                        <td>Chief Financial Officer (CFO)</td>
                                        <td>New York</td>
                                        <td>64</td>
                                        <td>2010/06/09</td>
                                        <td>$725,000</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011/07/25</td>
                                        <td>$170,750</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gloria Little</td>
                                        <td>Systems Administrator</td>
                                        <td>New York</td>
                                        <td>59</td>
                                        <td>2009/04/10</td>
                                        <td>$237,500</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cedric Kelly</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2012/03/29</td>
                                        <td>$433,060</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>33</td>
                                        <td>2008/11/28</td>
                                        <td>$162,700</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Brielle Williamson</td>
                                        <td>Integration Specialist</td>
                                        <td>New York</td>
                                        <td>61</td>
                                        <td>2012/12/02</td>
                                        <td>$372,000</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Herrod Chandler</td>
                                        <td>Sales Assistant</td>
                                        <td>San Francisco</td>
                                        <td>59</td>
                                        <td>2012/08/06</td>
                                        <td>$137,500</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Rhona Davidson</td>
                                        <td>Integration Specialist</td>
                                        <td>Tokyo</td>
                                        <td>55</td>
                                        <td>2010/10/14</td>
                                        <td>$327,900</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Colleen Hurst</td>
                                        <td>Javascript Developer</td>
                                        <td>San Francisco</td>
                                        <td>39</td>
                                        <td>2009/09/15</td>
                                        <td>$205,500</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sonya Frost</td>
                                        <td>Software Engineer</td>
                                        <td>Edinburgh</td>
                                        <td>23</td>
                                        <td>2008/12/13</td>
                                        <td>$103,600</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jena Gaines</td>
                                        <td>Office Manager</td>
                                        <td>London</td>
                                        <td>30</td>
                                        <td>2008/12/19</td>
                                        <td>$90,560</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Quinn Flynn</td>
                                        <td>Support Lead</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2013/03/03</td>
                                        <td>$342,000</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Charde Marshall</td>
                                        <td>Regional Director</td>
                                        <td>San Francisco</td>
                                        <td>36</td>
                                        <td>2008/10/16</td>
                                        <td>$470,600</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Haley Kennedy</td>
                                        <td>Senior Marketing Designer</td>
                                        <td>London</td>
                                        <td>43</td>
                                        <td>2012/12/18</td>
                                        <td>$313,500</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tatyana Fitzpatrick</td>
                                        <td>Regional Director</td>
                                        <td>London</td>
                                        <td>19</td>
                                        <td>2010/03/17</td>
                                        <td>$385,750</td>
                                        <td>
                                            <a href="#" class="remove">ELIMINAR</a>
                                            <a href="#" class="change">MODIFICAR</a>
                                            <a href="#" class="profile">PERFIL</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                
                    </div>

                            

                </div>
            </div>
        )
    }
}

export default clientes