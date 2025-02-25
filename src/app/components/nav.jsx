import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA43vgshVXMz6hzq0SY-7Cv94eHsftCi0JVA&s" alt="Bootstrap" width="60" height="70" />
                            Gestión de Reservas
                    </a>
                </div>
            </nav>
            <h1 className='text-center'>Zona de orden</h1>
        </div>
    );
};

export default Nav;
