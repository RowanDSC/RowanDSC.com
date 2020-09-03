import React from "react" 

export default class Article extends React.Component{

    render() {
        return (
            <div>
                <div className={"article"} id={this.props.articleId}>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }

}
