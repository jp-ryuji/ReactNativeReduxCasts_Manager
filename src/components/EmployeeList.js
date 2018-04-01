import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  // NOTE: componentWillMount
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  // NOTE: componentWillReceiveProps
  // NOTE: nextProps are the next set of props that this component will be rendered with. this.props is still the old set of props.
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  // NOTE: { employees } is destructed from the argument's object.
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmtpySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // The end result is like { shift: 'Monday', name: 'S', id: 'adef' }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
