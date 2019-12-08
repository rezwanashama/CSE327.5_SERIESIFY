import React, {Component} from 'react'
import {Popover, Button} from 'antd';
import './ComponentCSS/popover.css'

export default class OverviewPopover extends Component {

  render() {
      const text = <span>{this.props.text}</span>;
      const content = (
        <div className="popsize">
          <p>{this.props.content}</p>
        </div>
      );

    return (
      <div>
        <Popover placement="top" title={text} content={content}>
          <Button>Overview</Button>
        </Popover>

      </div>
    )
  }
}
