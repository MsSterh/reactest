var articles = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    year: React.PropTypes.string,
    coop: React.PropTypes.string,
    text: React.PropTypes.string    
  },

  render: function() {
    return (
      <div>
        {this.props.articles.map(function(article, i){
          return <p>Title {i+1}: {article.title}</p>
        })}
      </div>
    );
  }
});