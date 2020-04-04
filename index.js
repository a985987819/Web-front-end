import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

import './Bookkeeping.css'
import Listitem from './listitem'




class Mbtitem extends React.Component{
    constructor(props){
        super(props)

        // this.addnumber = this.addnumber.bind(this)
        this.click = this.click.bind(this)
        
    }
    render(){
        return<a href="#" className='item' id={this.props.id} onClick={this.click}>
            <p>{this.props.id}</p>
        </a>
        
    }
    
   
    // addnumber(a){
    // const {id}=this.props.id
    //     this.props.onBian(id)
    // }
    click(id){
        // console.log(id)
        if(id==1||2||3||4||5||6||7||8||9||0){
            // console.log(this.props.id)
            this.props.onBian(this.props.id)
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
        if(id=='<x]'){
            console.log('<x]')
        }
    }
}
//#endregion

Mbtitem.propTypes={
    onBian:propTypes.func.isRequired
}

class Ok extends React.Component{
    constructor(props){
        super(props)

        this.click=this.click.bind(this)
    }
    render(){
        return<a href="#" className='item' id='确定' onClick={this.click}>
            <p>{'确定'}</p>
        </a>
        
    }
    click(id){
            this.props.onBian('确定')
    }
    
}

class Mbutton extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            Mbutton:[
                {id:1},
                {id:2},
                {id:3},
                {id:'<x]'},
                {id:4},
                {id:5},
                {id:6},
                {id:':-}'},
                {id:7},
                {id:8},
                {id:9},
                {id:':-{'},
                {id:'C'},
                {id:0},
                {id:'.'},
                // {id:'确定'},
            ],
            a:0,
            moneylist:[ 
                
            ],
            notelist:[

            ]

            
        }
        this.onBian = this.onBian.bind(this)
        this.determine = this.determine.bind(this)
    }
    onBian(id){
        if(id==1||2||3||4||5||6||7||8||9||0){
            const input=this.refs.input
            const b=input.value
            this.setState({
                a:b*10+id
            })
        }
        if(id=='C'){
            this.setState(
                        {
                            a:0
                        }
                )
        }
        if(id=='<x]'){
            const input=this.refs.input
            const c=parseInt(input.value/10)
            
            this.setState({
                a:c
            })
        }
        if(id=='确定'){
            
            this.determine()
            this.setState(
                    {
                        a:0
                    }
               
        )
        }
        if(id=='+'){
            const input=this.refs.input
            const b=input.value
            this.setState(
                {
                    a:b+'+'
                }
            )
        }
        

        
    }

    determine(){
        let note =  this.refs.note.value
        let input=this.refs.input
        const b=input.value
        const x=parseInt(b)
        const c={[note]:x}
        this.state.moneylist.push(c)
        this.state.notelist.push(note)
        // this.setState({
        //     moneylist
        // })
    }



    render(){
        return<div className='root'>
            <div className='list'>
                {/* <Listitem moneylist={this.state.moneylist} key={this.state.moneylist}/> */}
                {this.state.moneylist.map((item,index)=>
                <Listitem {...item} key={index} show={this.state.moneylist[index]} 
                shownote = {this.state.notelist[index]}>
                    
                </Listitem>)}
            </div>

            <div className='father'>
                
                
                <div className='input'>
                <p>添加标签...</p>
                <input className='input1' ref={"note"} ></input>
                <input value={this.state.a} ref={"input"}  onChange={()=>{this.state.a} } disabled/>
                    
                </div>
                {this.state.Mbutton.map(item=><Mbtitem {...item} key={item.id} onBian={this.onBian}></Mbtitem>)}
                <Ok onBian={this.onBian} id={'确定'} key={'确定'}></Ok>
            </div>
            
            

        </div>
        
        
        
    }
}



ReactDOM.render(
    <div>
        <Mbutton></Mbutton>
    </div>,document.getElementById('app'))