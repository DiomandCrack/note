//react-redux
//1.负责接受一个组件,把state里的一些数据放到组件的属性里
//2.数据变化的时候,能够通知组件
//connect有四个参数 主要是mapStateToProps,mapDispatchToProps
import React,{Component} from 'react'
import PropTypes from 'prop-types'

// export function connect(mapStateToProps=state=>state,mapDispatchToProps={}){
// }

// export function connect(mapStateToProps,mapDispatchToProps){
//     return function(WrapComponent){
//         return class ConnectComponent extends Component{
//         }
//     }
// }

export const connect = (mapStateToProps=state=>state,mapDispatchToProps={})=>(Wrapper)=>{
    class ConnectComponent extends Component{
        static contextTypes = {
            store:PropTypes.object
        }
    }
}

export class Provider extends Component {
    static childContextTypes = {
        store:PropTypes.object
    }
    constructor(props,context){
        super(props,context)
        this.store = props.store
    }
    getChildContext(){
        return {store:this.store}
    }
    render(){
        return this.props.children
    }
}