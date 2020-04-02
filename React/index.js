import React from 'react'
import ReactDOM from 'react-dom'

import bookkeeping from './Bookkeeping.css'



//#region 

// function click(id){
//     // console.log(id)
//     if(id==1){
//         console.log('1')
//         this.setstate
//     }
//     if(id==2){
//         console.log('2')
//     }
//     if(id==3){
//         console.log('3')
//     }
//     if(id==4){
//         console.log('4')
//     }
//     if(id==5){
//         console.log('5')
//     }
//     if(id==6){
//         console.log('6')
//     }
//     if(id==7){
//         console.log('7')
//     }
//     if(id==8){
//         console.log('8')
//     }
//     if(id==9){
//         console.log('9')
//     }
//     if(id==0){
//         console.log('0')
//     }
//     if(id=='-'){
//         console.log('-')
//     }
//     if(id=='+'){
//         console.log('+')
//     }

//     if(id=='确定'){
//         console.log('确定')
//     }
//     if(id=='.'){
//         console.log('.')
//     }
//     if(id=='C'){
//         console.log('C')
//     }
    
//     if(id=='C'){
//         console.log('C')
//     }
    
// }

//#endregion
// function Mbtitem(props) { 
//     function addnumber(number) {

//         console.log({a:this.props.number})
//      }
//     function click(id){
//         // console.log(id)
//         if(id==1){
//             console.log('1')
//             addnumber(1)
//         }
//         if(id==2){
//             console.log('2')
//         }
//         if(id==3){
//             console.log('3')
//         }
//         if(id==4){
//             console.log('4')
//         }
//         if(id==5){
//             console.log('5')
//         }
//         if(id==6){
//             console.log('6')
//         }
//         if(id==7){
//             console.log('7')
//         }
//         if(id==8){
//             console.log('8')
//         }
//         if(id==9){
//             console.log('9')
//         }
//         if(id==0){
//             console.log('0')
//         }
//         if(id=='-'){
//             console.log('-')
//         }
//         if(id=='+'){
//             console.log('+')
//         }
    
//         if(id=='确定'){
//             console.log('确定')
//         }
//         if(id=='.'){
//             console.log('.')
//         }
//         if(id=='C'){
//             console.log('C')
//         }
        
//         if(id=='C'){
//             console.log('C')
//         }
        
//     }
//     return<a href="#"className='item' id={props.id} onClick={()=>{click(props.id)}}>
//             <p>{props.id}</p>
//         </a>
//  }
//#region 
class Mbtitem extends React.Component{
    constructor(){
        super()
    }
    render(){
        return<a href="#"className='item' id={this.props.id} onClick={this.addnumber.bind(this)}>
            <p>{this.props.id}</p>
        </a>
    }
    addnumber(){
        this.props.bian(this.props.id)
    }
    click(id){
        // console.log(id)
        if(id==1){
            console.log('1')
            
        }
        if(id==2){
            console.log('2')
        }
        if(id==3){
            console.log('3')
        }
        if(id==4){
            console.log('4')
        }
        if(id==5){
            console.log('5')
        }
        if(id==6){
            console.log('6')
        }
        if(id==7){
            console.log('7')
        }
        if(id==8){
            console.log('8')
        }
        if(id==9){
            console.log('9')
        }
        if(id==0){
            console.log('0')
        }
        if(id=='-'){
            console.log('-')
        }
        if(id=='+'){
            console.log('+')
        }
    
        if(id=='确定'){
            console.log('确定')
        }
        if(id=='.'){
            console.log('.')
        }
        if(id=='C'){
            console.log('C')
        }
        
        if(id=='C'){
            console.log('C')
        }
        // this.setState({a:id})
    }
}
//#endregion


class Mbutton extends React.Component{
    constructor(props){
        super()
        
        this.state = {
            Mbutton:[
                {id:1},
                {id:2},
                {id:3},
                {id:'<x]'},
                {id:4},
                {id:5},
                {id:6},
                {id:'+'},
                {id:7},
                {id:8},
                {id:9},
                {id:'-'},
                {id:'C'},
                {id:0},
                {id:'.'},
                {id:'确定'},
            ],
            a:0
        }
    }
    // addnumber(arg){
    //     this.setState({number:arg})
    // }
    onBian(id){
        // this.setState({
        //     a:id
        // })
        console.log(id)
    }

    render(){
        return<div className='father'>
            <div className='input'>
                <input  defaultValue={this.state.a} onChange={()=>{this.state.a}} disabled/>
                
                </div>
            {
            this.state.Mbutton.map(item=>

            <Mbtitem {...item} key={item.id} bian={this.onBian}></Mbtitem>
            
            )}
        </div>
    }
    addnumber(arg){
        this.setState({number:arg})
    }
}


ReactDOM.render(
    <div>
        <Mbutton></Mbutton>
    </div>,document.getElementById('app'))