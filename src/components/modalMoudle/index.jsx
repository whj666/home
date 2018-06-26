import React from "react";
import {Modal, Form} from 'antd';
import "./style.less";

class ModalMoudle extends React.Component{
    constructor(props){
        super(props);

        this.x = 0;
        this.y = 0;
        this.l = 0;
        this.t = 0;
        this.isDown = false;
    }

    componentDidMount(){
        window.onmousemove = this.handleMousemove;
    }

    //鼠标按下事件
    onMouseDown = (e) => {
        const dv = document.getElementById('move');

        //获取x坐标和y坐标
        this.x = e.clientX;
        this.y = e.clientY;

        //获取左部和顶部的偏移量
        this.l = dv.offsetLeft;
        this.t = dv.offsetTop;

        //开关打开
        this.isDown = true;
    }

    //鼠标抬起事件
    onMouseUp = () => {
        //开关关闭
        this.isDown = false;
    }

    //鼠标移动事件
    handleMousemove = (e) => {
        if (!this.isDown) {
            return false;
        }
        const sv = document.getElementsByClassName("modalMoudle")[0];

        //获取x和y
        var nx = e.clientX;
        var ny = e.clientY;

        //计算移动后的左偏移量和顶部的偏移量
        var {x, y, l, t} = this;
        var nl = nx - (x - l);
        var nt = ny - (y - t);
        
        sv.style.left = nl + 'px';
        sv.style.top = nt + 'px';
    }

    render(){
        const {visible, title, onCancel, onCreate, content, width, height} = this.props;
        return(
            <Modal 
                className={`modalMoudle ${width} ${height}`} 
                wrapClassName="vertical-center-modal"
                visible={visible} 
                title={title} 
                onCancel={onCancel} 
                onOk={onCreate}
            >
                <div 
                    id="move" 
                    className="move" 
                    onMouseDown = {this.onMouseDown}
                    onMouseUp = {this.onMouseUp}
                />
                {content}
            </Modal>
        );
    }
}

export default ModalMoudle;