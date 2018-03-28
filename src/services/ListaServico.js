
import { AsyncStorage } from 'react-native'; 

    
   /* componentDidMount () { 
      this._updateList(); 
    }*/ 

 export const salvarTarefa = async (value) => {
        try {
          await AsyncStorage.setItem('@MySuperStore:key', value);
        } catch (error) {
          //console.log("Error saving data" + error);
        }
      }

export const  recuperarTarefa = async () => {
        try {
          const value = await AsyncStorage.getItem('@MySuperStore:key');
          this.setState({myKey: value});
        } catch (error) {
          //console.log("Error retrieving data" + error);
        }
      }

export const removerTarefas = async () => {
        try {
          await AsyncStorage.removeItem('@MySuperStore:key');
          const value = await AsyncStorage.getItem('@MySuperStore:key');
          this.setState({myKey: value});
        } catch (error) {
         // console.log("Error resetting data" + error);
        }
      }

    /*async _addTask () { 
        const listOfTasks = [...this.state.listOfTasks, this.state.text]; 
    
        await AsyncStorage.setItem('ListaTarefas', 
        JSON.stringify(listOfTasks)); 
    
        this._updateList(); 
      }

    async _updateList () { 
        let response = await AsyncStorage.getItem('ListaTarefas'); 
        let listOfTasks = await JSON.parse(response) || []; 
    
        this.setState({ 
          listOfTasks 
        }); 
    
        this._changeTextInputValue(''); 
      } */
