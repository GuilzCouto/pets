import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';
import { AxiosError } from 'axios';

export function useCadastro(){
    const [name, setName] = useState(''),
        [story, setStory] = useState(''),
        [picture, setPicture] = useState(''),
        [mensagem, setMensagem] = useState('')

    function cadastrar(){
        if(validarFormulario()){
            ApiService.post('/pets/', {
                name,
                story,
                picture
            })
                .then(() => {
                    limpar();
                    setMensagem('Pet cadastrado com sucesso!')
                })
                .catch((error: AxiosError) => {
                    setMensagem(error.response?.data.message);
                })
        } else {
            setMensagem('Preencha todos os campos!');
        }
    }

    function validarFormulario(){
        return name.length > 2 && story.length > 20 && picture.length > 5;
    }

    function limpar(){
        setName('');
        setStory('');
        setPicture('');
    }

    return {
        name,
        story,
        picture,
        setName,
        setStory,
        setPicture,
        cadastrar,
        mensagem,
        setMensagem
    }
}