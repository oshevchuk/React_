/**
 * Created by Oshevchuk on 21.07.2017.
 * http://oshevchuk2016.16mb.com/
 */

var photos = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 350 рублей!',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    }
];


var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        return {
            counter: 0
        }
    },
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = "empty";
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length>0?'':'none')}>
                    Total news: {data.length}
                </strong>

            </div>
        );
    }
});

var Add = React.createClass({
    render: function () {
        return (
            <div>
                <form className="add cf">
                    <input type="text" className="add_author" defaultValue="" placeholder="name" ref="author"/>
                    <textarea className="add_text" defaultValue="" ref="text"></textarea>
                    <label className="add_checkrule">
                        <input type="checkbox" defaultCheked={false} ref="checkrule" onChange={this.onCheckRuleClick} /> acsept terms of use
                    </label>
                    <button onClick={this.onBtnClickHandler} ref="alert_button" disabled={this.state.btnIsDisabled} >Show</button>
                </form>
            </div>
        )
    },

    onBtnClickHandler: function (e) {
        // alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
        // alert(1);
        e.preventDefault();
        var author=ReactDOM.findDOMNode(this.refs.author).value;
        var text= ReactDOM.findDOMNode(this.refs.text).value;
        alert(author+ '\n' +text);
    },
    componentDidMount:function () {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    componentWillReceiveProps: function (nextProps) {
        // this.setState({
        //     likesIncreasing: nextProps.likeCount > this.props.likeCount
        // })
    },
    getInitialState:function () {
        return{
            btnIsDisabled: true,
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        }
    },
    onAuthorChange: function (e) {
        if(e.target.value.trim().length>0){
            this.setState({authorIsEmpty:false})
        }else{
            this.setState({authorIsEmpty:true})
        }
    },
    ontextChange:function () {
        if(e.target.value.trim().length>0){
            this.setState({textIsEmpty:false})
        }else{
            this.setState({textIsEmpty:true})
        }
    },
    onCheckRuleClick:function (e) {
        this.setState({btnIsDisabled: !this.state.btnIsDisabled})
    }
});

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {
            visible: false,
            raiting: 0
        }
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function () {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText;
        var visible = this.state.visible;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}:</p>
                <a href="#" onClick={this.readmoreClick} className={"news__readmore " + (visible?'none':'')}>Details</a>
                <p className={"news__big-text " + (visible?'':'none') }>{bigText}:</p>
            </div>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3>News</h3>
                <Add/>
                <News data={my_news}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);