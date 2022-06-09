import { NextPage } from "next";
import { useCadastro } from "../../data/hooks/pages/pets/useCadastro";
import Title from "../../ui/components/title/title";
import { Paper, TextField, Grid, Button, Snackbar } from "@mui/material";


const Cadastro: NextPage = () => {
    const {
        name,
        story,
        picture,
        setName,
        setStory,
        setPicture,
        cadastrar,
        mensagem,
        setMensagem,
    } = useCadastro();
    
    return (
        <>
            <Title 
                title={'Cadastro de Pets para Adoção'}
                subtitle={'Preencha os dados do novo Pet'}
            />

            <Paper sx={{maxWidth:970, mx:'auto', p:5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField value={name}
                            onChange={(e) => setName(e.target.value)} label={'Nome'} placeholder={'Digite o nome do Pet'} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={story}
                            onChange={(e) => setStory(e.target.value)} 
                            label={'História do Pet'} 
                            multiline 
                            rows={4} 
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={picture}
                            onChange={(e) => setPicture(e.target.value)} 
                            label={'Foto'} 
                            placeholder={'Digite o endereço da imagem'} 
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            variant={'contained'} 
                            color={'secondary'} 
                            component={'a'} 
                            href={'https://imgur.com/upload'} 
                            target={'_blank'} 
                            >Enviar Imagem</Button>    
                    </Grid>    
                    <Grid item xs={12} sx={{textAlign:'center'}}>
                        <Button 
                            onClick={cadastrar}
                            variant="contained" 
                            fullWidth 
                            sx={{maxWidth:{md:200}, mt:4}}
                            >Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar open={mensagem.length>0} message={mensagem} autoHideDuration={2500} onClose={() => setMensagem('')}/>
        </>
    )
}

export default Cadastro;