class Content extends React.Component {
    render() {
        return (
            <form action="/users/write" method="post">
                <table>
                    <tr>
                        <td>문의유형</td>
                        <td>
                            <select name="division">
                                <option>선택</option>
                                <option>청약철회 요청</option>
                                <option>결제/환불 문의</option>
                                <option>계정 문의</option>
                                <option>시스템 장애</option>
                                <option>버그 제보</option>
                                <option>건의 문의</option>
                                <option>기타 문의</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>주제</td>
                        <td>
                            <input type="text" name="title"/>
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea name="content"></textarea>
                        </td>
                    </tr>
                </table>
                <input type="submit" value="문의"/>
                <input type="reset" value="취소"/>
            </form>
        );
    }
}

class Write extends React.Component {

    render() {
        return (
            <div className="content">
                <Menu/>
                <div className="keyimage">
                    <img src="/images/keyimage1.png"/>
                </div>
                <Content></Content>
            </div>

        );
    }


}

ReactDOM.render(<Write/>, document.getElementById('write'));