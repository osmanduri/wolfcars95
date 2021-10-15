import React, { useState } from 'react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_Ag0KPHlqTZpjssiH8bdHS");
export default function Contacts() {
    const [nom, setNom] = useState('');
    const [vehicule, setVehicule] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [errorMail, setErrorMail] = useState('');
    const [emailOk, setEmailOk] = useState();
    const templateId = 'template_h8xfjvv';
    const serviceId = 'service_ctczopi';
    const userId = 'user_Su0WvdBJ6GwT1VEOKx5Hn';

      function handleSubmit(e){
        e.preventDefault();
        const isEmail = () => {
            let regex = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(regex.test(email)){
                setErrorMail('');
                return true;
            }else if(!email){
                setErrorMail('Veuillez renseigner un mail');
                setEmailOk('');
                setVehicule('');
                return false;
            }
            else{
                setErrorMail('Le format du mail est invalide');
                setEmailOk('');
                return false;
            }
        }
          if(isEmail() && nom){
            console.log('Le message a ete envoye')
            emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                if(result){
                    setEmailOk('Message envoyé !');
                    setNom('');
                    setEmail('');
                    setVehicule('');
                    setPhone('');
                    setMessage('');
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setEmailOk('');
            });

          }
      }
    return (
    <div className="contact">
        <div className="class_form container">
            <h1>Contactez-nous</h1>
            <form type="submit" onSubmit={handleSubmit}>
                <div className="class_form_input_textarea">
                    <div className="class_form_input">
                        <input onChange={(e) => setNom(e.target.value)} type="text" placeholder={"Nom* Prénom*"} id="lastName" name="lastName" value={nom} required/>
                        <input onChange={(e) => setVehicule(e.target.value)} type="text" placeholder="Véhicule" id="vehicule" name="vehicule" value={vehicule}/>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email*" id="email" name="email" value={email}/>
                        <p className="error_contact">{errorMail}</p>
                        <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Telephone" id="phone" name="phone" value={phone}/>
                    </div>
                        <textarea onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" id="message" name="message" value={message} minLength="6"/>
                </div>

            
                <div className="mon_bouton_form container">
                    <button>Envoyer</button>
                </div>
                <p className="mail_envoye">{emailOk}</p>
            </form>
        </div>
        <div className="iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10472.649444504676!2d2.323265287314388!3d48.98846758235586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6684fc4751e3b%3A0x4b7bef3d63c24ec8!2s23%20Rue%20de%20Clairvaux%2C%2095160%20Montmorency!5e0!3m2!1sfr!2sfr!4v1631809717565!5m2!1sfr!2sfr" width="100%" height="350" allowFullScreen="" loading="lazy" title="adresse_garage"></iframe>
        </div>
    </div>

    )
}
