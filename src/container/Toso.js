import React from 'react';
import {Grid} from '../component/Grid'
import {Search} from '../component/Search'
import './Toso.css';
export class Toso extends React.Component{
    constructor(props){
        super(props);
        this.state = {items:[],currentItem:{id:'',taskname:'',taskdate:''}};
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.search = this.search.bind(this);
    }
    deleteItem(key){
      console.log("key is",key)
      const filteredItems= this.state.items.filter(item =>
        item.id!==key);
      this.setState({
        items: filteredItems,
          currentItem:{
            id:'',
            taskname:'',
            taskdate:''
          }
      })
  
    }
    addItem(e){
      
        e.preventDefault();
        const newItem = this.state.currentItem;
        newItem.id = this.state.items.length+1;
        console.log ("ID is", newItem.id)
        if(newItem.taskname !==""){
          const items1 = [...this.state.items, newItem];
          console.log (items1)
        this.setState({
          items: items1,
          currentItem:{
            id:'',
            taskname:'',
            taskdate:''
                  }
        })
        }
        console.log("Add Item",this.state.items)
      }
    search(e){
      console.log("ho",e)
      const str = e.target.value;
      console.log("str");
      const filteredItems= this.state.items.filter(item =>
        (item.taskname.search(str)!== parseInt(-1)));
      console.log("filter",filteredItems.length)
      this.setState({
        items: filteredItems,
          currentItem:{
            id:'',
            taskname:'',
            taskdate:''
          }
      })
  
    }
    handleInput(e){
      const value = e.target.value;
      // setState({
      //   ...state,
      //   [evt.target.id]: value
      // });
        console.log("hi")
        console.log(this.state)
        this.setState({
          currentItem:{
            // this.state.items.id: e.target.value,
            ...this.state.currentItem,
            
            [e.target.id]:value
          }
        })
      }
          
    searchStringInArray (str, strArray) {
        console.log("searchStringInArray")
        for (var j=0; j<strArray.length; j++) {
            if (strArray[j].taskname.match(str)) return j;
        }
        return -1;
    }
    render(){
        // console.log("Render call")
        return (
            <div>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <div className="row">
                      <div>
                          <input type = "text" id="taskname" placeholder ="Enter Task Name Here" onChange={this.handleInput}></input>
                      </div>
                      <div>
                          <input type = "date" id="taskdate" placeholder ="Enter Date Here" onChange={this.handleInput}></input>
                      </div>
                      <div>
                          <input type = "time" id="tasktime" placeholder ="Enter Task Name Here" onChange={this.handleInput}></input>
                      </div>
                    
                      <button type ="Submit">Save</button>
                    </div>
                    <div className="col-lg-6">
                      <Search searchstr={this.search}/>
                      
                    </div>
                    
                    <Grid items = {this.state.items} deleteItem={this.deleteItem} />
                </form>

            </div>
        )
    }
}