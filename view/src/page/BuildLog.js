'use strict';

import React from 'react';
import {
  Breadcrumb,
} from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { queryParse } from '../util/index';
import ReliableLayout from '../components/ReliableLayout';

export default class BuildLog extends React.Component {
  render () {
    const { buildNumber, jobName } = queryParse(location.search);

    return (
      <ReliableLayout>
        <Breadcrumb style={{ marginBottom: '10px' }}>
          <Breadcrumb.Item>
            <Link to="/"><FormattedMessage id='sidebar.homepage' /></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/"><FormattedMessage id='sidebar.allbuilds' /></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{`${jobName} / ${buildNumber}`}</Breadcrumb.Item>
        </Breadcrumb>
      </ReliableLayout>
    );
  }
}

