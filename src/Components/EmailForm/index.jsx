import React from 'react'
import "./form.css"

function EmailForm() {
  return (
    <div className='formEmail'>
        <h4>E-məktublarımıza abunə olun</h4>
        <p>Təkliflər, gələcək aksiyalar haqqında məlumat və daha çoxunu əldə edin.</p>
        <div className="reqister-inputs">
            <div className="name">
                <input type="text" placeholder='*Ad'/>
            </div>
            <div className="username">
                <input type="text" placeholder='*Soyad'/>
            </div>
            <div className="mail">
                <input type="text" placeholder='*E-mail'/>
            </div>
        </div>
        <button className='mailButton'>E-mektublara abonelik</button>
    </div>
  )
}

export default EmailForm