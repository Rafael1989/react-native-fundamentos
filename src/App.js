import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import CompPadrao,{Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/relacao/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Filho from './components/relacao/Filho'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import Quadrado from './components/layout/Quadrado'
import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'
import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={styles.App}>
        <Mega qtdNumeros={12}/>
       {/*  <FlexboxV4 /> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
       {/*  <UsuarioLogado usuario={{nome:'Rafael2', email:'adssadasd'}}/>
        <UsuarioLogado usuario={{nome:'Rafael2', email:''}}/>
        <UsuarioLogado usuario={{nome:'', email:'asdasdad'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/> */}
        {/* <Pai>
            <Filho nome="Bia" sobrenome="Arruda"/>
            <Filho nome="Carlos" sobrenome="Arruda"/>
        </Pai>

        <Pai>
            <Filho nome="Ana" sobrenome="Silva"/>
            <Filho nome="Julia" sobrenome="Silva"/>
            <Filho nome="Gui" sobrenome="Silva"/>
            <Filho nome="Rebeca" sobrenome="Silva"/>
        </Pai> */}

        {/* <ParImpar /> */}
        {/* <Diferenciar /> */}
      {/*   <ContadorV2 /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro Produto" segundario="Tela de Cadastro"/> */}
       {/*  <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/> */}
        {/* <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/> */}
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const styles = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})