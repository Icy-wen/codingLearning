
import {Component,PureComponent} from 'react'


class Dong extends PureComponent{//memo

    constructor(){
        super()
        this.state={
        a:{
            b:1
        }
    }
    }
    componentDidMount(){//生命周期函数,组件挂载完成后执行
        setTimeout(()=>{
            //this.state.a.b=2;//引用地址同一个，不会更新
            this.setState({
                a:{
                    b:2
                }

            })
        },2000)
    }
    render(){
        return (
            <div>
                我是Dong组件,{this.state.a.b}

            </div>
        )
    }
}

export default Dong
