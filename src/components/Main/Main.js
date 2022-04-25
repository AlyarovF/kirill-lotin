import React, {Component} from 'react'
import "./Main.css"
import saveWord from './Functions'
import Translate from './Translate'
import Delete from './Delete'
import Changer from './Changer'

class Main extends Component {
    
    render() { 
        return (
            <div className="main">
                <div className="controls">
                    <div className="control-left">
                        <p className="control-language" id="control-lotin">Lotin</p> 
                    </div>
                    <div className="control-changer" onClick={Changer}><i class="fas fa-exchange-alt"></i></div>
                    <div className="control-right">
                        <p className="control-language" id="control-kirill">Kirill</p> 
                        <a className="control-word" id="download" onClick={saveWord}><i class="fas fa-file-word"></i> Word shaklida yuklash</a>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input-left">
                        <div className="delete" onClick={Delete}><i class="fas fa-backspace"></i></div>
                        <div className="copy-left"><i class="fas fa-copy"></i></div>
                        <textarea onInput={Translate} spellcheck="false" id="lotin" type="text" placeholder="Бу ерга лотин ёки кирилл ёзувига ўгириш керак бўлган матнни киритинг..."></textarea>
                    </div>
                    <div className="input-right">
                        <div className="copy-right"><i class="fas fa-copy"></i></div>
                        <textarea spellcheck="true" id="textinput" type="text" disabled></textarea>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
 
export default Main