import './index.css'
import InputFatec2 from "../../components/Inputs/InputFatecExercicio";
import ButtonFatec from "../../components/ButtonFatec/ButtonFatec";
import Layout from '../../components/Layout';
export default function Contatos(){
    return(
             
              <Layout>
           <h1>Contatos</h1>
           
            <p>
            Aqui você pode entrar em contato conosco
            </p>
            <InputFatec2 type='string' placeholder='Nome'/>
            <p>
          <InputFatec2 type='string' placeholder='E-mail'/>
        </p>
          <InputFatec2 type='string' placeholder='Telefone'/>
         <p>
            
         </p>
          <ButtonFatec type='submit' label='Fatec: Enviar mensagem'/>

          </Layout>
    )
}
