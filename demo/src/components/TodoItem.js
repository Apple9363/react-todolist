import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props); //继承
        this.deleteItem = this.deleteItem.bind(this);
    }

//子组件想和父组件通信，子组件要调用父组件传递过来的方法

    deleteItem(){
        //在react中如果要操作state中的数据，尽量不要直接操作state,若以后使用其他框架时，容易出错，性能低下
        const {delet,index} = this.props;
        delet(index);
        // this.props.delete(this.props.index);
      }

    render() {//reander函数返回jsx
        const { content } = this.props;
        return(
            <div className="list-item" onClick={this.deleteItem}>
                {content}
            </div>
        );
    }
}

export default  TodoItem;