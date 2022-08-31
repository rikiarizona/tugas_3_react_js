import React, { Component } from 'react';

class MenuKontak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jl. Swadaya IV, Pd. Ranggon, Cipayang, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak: "081312345678"
        }
    };
    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h2> Kontak Kami : {this.state.kontak}</h2>
                </center>
            </div>
        );
    }
};

export default MenuKontak;