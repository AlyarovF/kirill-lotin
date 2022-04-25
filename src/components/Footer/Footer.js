import React, {Component} from 'react'
import virgroup from "./logo/virtual-group.png"
import viruy from "./logo/virtual-uy.png"
import royaledu from "./logo/royal-edu.png"
import goglobal from "./logo/go-global.png"
import "./Footer.css"

class Footer extends Component {
    render() { 
        return (
            <div className="Footer">
                <h3>Hamkorlarimiz bilan tanishing.</h3>
                <div className="hamkorlar">
                    <div>
                        <img src={virgroup} width="150"/>
                        <p><b>VIRTUAL GROUP</b> - onlayn freelanserlik xizmati, istagan turdagi dasturiy maxsulotlar ishlab chiqaruvchi jamoa.</p>
                    </div>
                    <div>
                        <img src={viruy} width="150"/>
                        <p><b>VIRTUAL UY</b> - platformasi orqali o'z uyingizni tez va oson soting yoki ijaraga bering. Istagan uyingizni topish imkoniaytiga ega bo'ling.</p>
                    </div>
                    <div>
                        <img src={royaledu} width="150"/>
                        <p><b>VIRTUAL EDU</b> - platformasi orqali barcha yo'nalishlardan onlayn ta'lim oling. Barcha darslarni uydan chiqmagan xolda o'rganing.</p>
                    </div>
                    <div>
                        <img src={goglobal} width="150"/>
                        <p><b>GO GLOBAL</b> - dasturlash akademiyasiga tashrif buyuring va butunlay o'zgacha olamni his eting, dasturchilar comfort zonasida birga bo'ling.</p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Footer