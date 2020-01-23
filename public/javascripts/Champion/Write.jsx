class Write extends React.Component{
    render(){
        return(
            <div className = "write">
                <input type="text"/>글쓰기임
                타입 사진 이름 가격 (rp be) 그리고 포지션 
                <button className="btn btn-primary">dd</button>
            </div>
        );
    }
}

class Champion extends React.Component {

    render() {
        return (
            <div className="championWrite" >
                <Menu/>
                <Write/>
            </div>

        );
    }


}

ReactDOM.render(<Champion/>, document.getElementById('championWrite'));