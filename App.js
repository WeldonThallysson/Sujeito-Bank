import React,{useState} from 'react';
import { View,Text,TextInput, Image,StyleSheet,Switch, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import  Slider  from '@react-native-community/slider';

const App = () => {
   const [exibinome,setExibiNome] = useState()
   const [exibiIdade,setExibiIdade] = useState()
   const [exibilimite,setExibiLimite] = useState()
   const [exibigenero,setExibiGenero] = useState()
  
  
  
  
   const [nome,setNome] = useState()
   const [idade,setIdade] = useState()
   const [genero,setGenero] = useState('')
   const [limite,setLimite] = useState(0)
   const [seletor,setSeletor] = useState(false)
  

   function exibirCadastro(){
    setExibiNome(nome)  
    setExibiIdade(idade)
    setExibiLimite(limite)
    setExibiGenero(genero)
   }


  return(
     <View style={{flex: 1}}>


          <View /*Topo */ style={Estilos.Topo}>
                  <Image source={require('./src/download.png')} style={{width: 200,height: 60}}/>
              
           </View>

           <View /* Contéudo */ style={Estilos.Conteudo}>
 
           <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 18,fontWeight: 'bold',color: '#6290C3'}}>Faça seu Cadastro</Text>
          </View>
                   
                   
          <TextInput placeholder='Digite Seu Nome' onChangeText={(valor) => setNome(valor)} style={Estilos.Inputs}/>
          <TextInput placeholder='Digite Seu Idade' onChangeText={(valor) => setIdade(valor)} style={Estilos.Inputs}/>

            <View style={{marginLeft: 12}}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color: '#6290C3'}}>Selecione Seu Gênero</Text>
            </View>

              <Picker selectedValue={genero} onValueChange={(itemValue) => setGenero(itemValue)}>
               <Picker.item key={0} value={'Masculino'} label={'Masculino'}/>
               <Picker.item key={1} value={'Feminino'} label={'Feminino'}/>             
              </Picker> 

            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Quanto de limite Você 
              Precisa</Text>   
            </View>

             <Slider 
             minimumValue={0}
             maximumValue={2500}
             onValueChange={(valor) => setLimite(valor.toFixed(0))}
             />

            <View style={{marginLeft: 15}}>
             <Text style={{fontSize: 15, fontWeight: 'bold'}}>{limite}</Text>
            </View>   
            

          <View style={{marginLeft: 10}}>
           <Text style={{fontSize: 16,fontWeight: 'bold',color: '#6290C3'}}>Selecione Adulto ou Estudante</Text>      
           <Text style={{fontSize: 16}}>{seletor ? 'Estudante' : 'Adulto'}</Text>
          </View>

            <View style={{top: -45, right: 80}}>
              <Switch
                value={seletor}
                onValueChange={(valor) => setSeletor(valor)}
              />
            </View>     
                   
          <View style={{justifyContent: 'center',alignItems: 'center'}} /*conteiner do botão */>
            <TouchableOpacity onPress={() => exibirCadastro()}style={{backgroundColor: '#6290C3', width: 150, height: 35,borderRadius: 4}}>
              <Text style={{padding: 5,textAlign: 'center',color:'white',fontSize: 15,}}>Cadastrar</Text>  
            </TouchableOpacity> 
           </View>


           <View /*Rodapé */ style={Estilos.rodape}>
                <Text>nome: {exibinome}</Text>
                <Text>idade: {exibiIdade}</Text>
                <Text>limite: {exibilimite}</Text>
                <Text>genero: {exibigenero}</Text>
    
           </View>



    </View>

</View> 
  )
}
export default App

const Estilos = StyleSheet.create({
 
   Topo:{
         flex: 1/6,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: '5%',
   },
 
  Conteudo:{
       flex: 1/6,
       marginTop: '5%',
  },

  rodape:{
  },
  Inputs:{
    margin: 10,
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  }
   


})
