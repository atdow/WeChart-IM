/*
 * @Author: atdow
 * @Date: 2021-03-30 22:38:33
 * @LastEditors: null
 * @LastEditTime: 2021-03-30 23:06:11
 * @Description: file content
 */
import * as React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import "./style.scss";
import OperationPannel from '../../components/OperationPannel/index';

interface IProps extends RouteComponentProps { }
class Layouts extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className="layout-wrapper">
        <OperationPannel />
        {/* <Switch>
          <Route path="/" component={Home} />
          <Route
            render={() => (
              <Exception
                title="404"
                desc="抱歉，你访问的页面不存在"
                showAction={true}
              />
            )}
          />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(Layouts);

