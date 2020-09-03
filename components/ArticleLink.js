import PropTypes from 'prop-types';

export default class ArticleLink extends React.Component {
    render() {
        return (
            <a href="javascript(0);" onClick={() => onOpenArticle(this.props.article)}>{this.props.children}</a>
        );
    }
}

ArticleLink.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool
}