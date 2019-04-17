let data = [
    {value: '小康别撸了',time: 5, color: 'red', speed: 1, fontSize: 22},
    {value: '小康别撸了,身体要紧',time: 10, color: 'red', speed: 1, fontSize: 22},
    {value: '小康别撸了，肾要紧',time: 14, color: 'red'},
    {value: '小康别撸了，强撸灰飞烟灭',time: 16, color: 'red', speed: 1, fontSize: 22},
    {value: '小康别撸了，再撸就凉了',time: 17,},
    {value: '小康别撸了，好好敲代码去',time: 20, color: 'red', speed: 1, fontSize: 22},
    {value: '小康你怎么了？',time: 23,speed: 1, fontSize: 22},
    {value: '小康你快醒醒',time: 25}
]

//获取所有需要的dom结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

//创建一个 CanvasBarrage 的类
class CanvasBarrage {
    constructor(canvas,video,opts={}) {
        //如果canvas和video都没有传的话
        if (!canvas || !video) {
            return;
        }
        // 增加属性，挂载到this上
        this.video = video;
        this.canvas = canvas;

        this.canvas.width = video.width;
        this.canvas.height = video.height;
        //获取画布
        this.ctx = canvas.getContext('2d');

        // 设置默认参数，如果没有传就用默认值
        let defOPts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        };

        // 合并对象全部挂载到this实例上
        Object.assign(this, defOPts, opts);
        // 添加属性，用来判断播放状态，默认true是暂停
        this.isPause = true;
        // 获取所有的弹幕消息
        this.barrages = this.data.map(item => new barrage(item, this));
        // 渲染弹幕
        this.render();
    }
    // function render() {}
    render() {
        // 渲染的第一步是清除原来的画布
        this.clear();
        // 渲染弹幕
        this.renderBarrage();
        // 如果没有暂停的话就继续渲染
        if (this.isPause === false) {
            requestAnimationFrame(this.render.bind(this));
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderBarrage() {
        // 要根据当前视频播放的时间和弹幕展示的时间作比较，来判断是否展示弹幕
        let time = this.video.currentTime;

        //
        this.barrages.forEach(barrage => {
            // 只有在视频播放时间大于等于弹幕展示时间，才做处理

            if(!barrage.flag && time >= barrage.time) {
                //判断当前弹幕是否初始化
                if (!barrage.isInit) {
                    barrage.init();
                    barrage.isInit = true;
                }
                //弹幕从右往左渲染，所以只需要把当前X轴坐标减去当前弹幕speed
                barrage.x -= barrage.speed;
                barrage.render(); //渲染当前弹幕

                // 如果当前弹幕X轴坐标比自身的宽度还小，就表示渲染结束
                if (barrage.x < -barrage.width) {
                    barrage.flag = true;
                }
            }
        });
    }
    add(obj) {
        this.barrages.push(new barrage(obj, this))
    }
}
// 创建barrage类，用来实例化每一条danmu
class barrage {
    constructor (obj,ctx) {
        this.value = obj.value;
        this.time = obj.time;
        // 把obj和ctx都挂载到this上，方便获取
        this.obj = obj;
        this.context = ctx;
    }
    // 初始化弹幕
    init () {
        // 如果数据里没有涉及到下面四种参数，就取默认值
        this.color = this.obj.color || this.context.color;
        this.speed = this.obj.speed || this.context.speed;
        this.opacity = this.obj.opacity || this.context.opacity;
        this.fontSize = this.obj.fontSize || this.context.fontSize;

        // 为了计算每条弹幕的宽度，我们必须创建一个元素p，然后计算文字宽度
        let p = doc.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        doc.body.appendChild(p)
        this.width = p.clientWidth
        doc.body.removeChild(p);

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random();

        // 超出范围
        if (this.y < this.fontSize) {
            this.y = this.fontSize;
        }else if(this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize;
        } 
    }
    // 渲染每一条弹幕
    render() {
        // 设置画布文字和字体
        this.context.ctx.font = `${this.fontSize}px Arial`
        // 设置画布的文字颜色
        this.context.ctx.fillStyle = this.color;
        // 绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}

let canvasBarrage = new CanvasBarrage(canvas, video, { data });
// 设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
    canvasBarrage.isPause = false;
    canvasBarrage.render() // 触发弹幕
})

// 发送弹幕的方法
function send() {
    let value = $txt.value;  // 输入的内容
    let time = video.currentTime; // 当前视频时间
    let color = $color.value;   // 选取的颜色值
    let fontSize = $range.value; // 选取的字号大小
    let obj = { value, time, color, fontSize };
    // 添加弹幕数据
    canvasBarrage.add(obj);
    $txt.value = ''; // 清空输入框
  }
  // 点击按钮发送弹幕
  $btn.addEventListener('click', send);
  // 回车发送弹幕
  $txt.addEventListener('keyup', e => {
    let key = e.keyCode;
    key === 13 && send();
  });
  