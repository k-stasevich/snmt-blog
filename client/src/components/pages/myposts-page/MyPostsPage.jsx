import * as React from 'react';
import '../../../assets/styles/HomePage.less';
import '../../../assets/styles/MyPostsPage.less';
import Header from 'components/common/header/index.jsx';
import Footer from 'components/common/footer/index.jsx';
import Posts from 'components/common/postsContainer/index.jsx';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class MyPostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  render() {
    return (
      <div className="main">
        <Header
          auth={this.state.auth}
        />
        <div className="content">
          <div>
            <div className="button-plus">
              <Link to="/addpost">
                <div className="round" />
              </Link>
            </div>
            <Posts edit={true} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyPostsPage;