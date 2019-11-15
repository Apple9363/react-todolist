import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import { Button, Input} from 'antd';
import TodoItem from './components/TodoItem';

import 'antd/dist/antd.css';
import { func } from 'prop-types';
import { callbackify } from 'util';

class App extends Component {
  constructor(porps){//es6
    super(porps);
    this.state ={ //this.state和vue的data()函数相似，里面初始化数据
      list: [],      //数据控制显示多少项
      inputValue: '',

    };

    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // state={//es7
  //   count: 0
  // }
  handleClick(){
    this.setState({ //setstate函数
      //es6语法，...展开运算符，代表learn react,learn english,learn vue
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  deleteItem(index){
    //在react中如果要操作state中的数据，尽量不要直接操作state,若以后使用其他框架时，容易出错，性能低下
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({ list})
  }
  //es6方式
  // handleClick = ()=>{
  //   this.setState({count: this.state.count+1});
  // }
  //优化代码
  getItems(){
    return(
      this.state.list.map((item,index)=>{
        return (
                <TodoItem 
                  key={index}  
                  content={item} 
                  index={index} 
                  delet={this.deleteItem}
                />
        )
          // return <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
      })
    );

  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传过来的参数

  render(){
    return (
      // <Fragment></Fragment> 可以使用React.Fragment标签代替最外层标签
      <div className="App">
        <div style={{padding: '10px 16px'}}>
            <Input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="请输入" className="input-width"/>
            <Button className="" onClick={this.handleClick} type="primary">add</Button>
        </div>
        <ul className="list">{this.getItems()}</ul>
      </div>
    )
  }
 
}
export default App;
