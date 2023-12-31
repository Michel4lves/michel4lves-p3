import './ContactForm.css'
import InputText from '../inputs/InputText'
import InputTextArea from '../inputs/InputTextArea'
import GlassButton from '../buttons/GlassButton'
import { useState } from 'react'

export default function ContactForm({ colorBgSet, colorBorderSet, themeModeSet }) {

    const [title, setTitle] = useState('Enviar')
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    function submit(e) {
        // e.preventDefault()
        setTitle('Obrigado!')
        setTimeout(() => {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setTitle('Enviar')
        }, 2000)
    }


    return (
        <div className={`${"contactForm"} ${colorBorderSet}`}>
                <h2>Mande sua mensagem:</h2>
                <form className="form" name="form" action="https://formsubmit.co/michelsantosa@gmail.com" method="POST" onSubmit={submit}>
                    {/* submit configuration */}
                    <input type="hidden" name="_next" value="https://michel4lves.github.io/Thanks_Page/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_template" value="table"></input>
                    {/* End of submit configuration */}
                    <InputText type="text" text="Nome" name="first-name" value={name} s50s100="s50" colorBorderSet={colorBorderSet} themeModeSet={themeModeSet} />
                    <InputText type="email" text="Email" name="email" value={email} s50s100="s50" colorBorderSet={colorBorderSet} themeModeSet={themeModeSet} />
                    <InputText type="text" text="Assunto" name="subject" value={subject} s50s100="s100" colorBorderSet={colorBorderSet} themeModeSet={themeModeSet} />
                    <InputTextArea type="textarea" text="Escreva sua mensagem aqui..." name="message" value={message} s50s100="s100" colorBorderSet={colorBorderSet} themeModeSet={themeModeSet} />
                    <GlassButton title={title} colorBgSet={colorBgSet} activeClass='send' type="submit" themeModeSet={themeModeSet} />
                </form>
        </div>
    )
}