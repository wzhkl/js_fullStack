
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Taro首页'
  }

  constructor(props) {
    super(props); // 将Component基类的方法执行，要用constructor，一定要super一下
    // 状态初始化 data -> state
    this.state = {
      list: [
        '5:00起床',
        'coding',
        '24:00 sleep'
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let { list, inputVal } = this.state
    return (
      <View className='index'>
        <Input className="input" type="text" value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Text className="add" onClick={this.addItem.bind(this)}>添加</Text>
        {
          list.map((item, index) => {
            return (
              <View>
                <text>{index + 1}.{item}</text>
                <text className="del" onClick={this.delItem.bind(this, index)}>删除</text>
              </View>
            )
          })
        }
      </View>
    )
  }

  inputHandler = (e) => {
    this.inputVal = e.target.value
  }

  addItem = () => {
    let { list } = this.state;
    const inputVal = this.inputVal
    if (inputVal == '') return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  delItem = (index) => {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}