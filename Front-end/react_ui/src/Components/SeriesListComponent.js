import React, { Component } from 'react'
import { List, Card, AutoComplete } from 'antd';
import OverviewPopover from './OverviewPopover';


export default class SeriesListComponent extends Component {
    render() {

        return (
            <div>
                <List
                header = {this.props.header}
                style={{ fontSize:40}}
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                    }}
                    dataSource={this.props.data}
                    renderItem={item => (

                    // Each Series Card
                    <List.Item style={{ padding : 30}} >
                        
                        <Card   
                            key= {item.id}
                            title ={<div className = "title">{item.original_name}</div>} 
                            style={{ width: AutoComplete ,padding: 5}}
                            cover={<img alt="" src={'http://image.tmdb.org/t/p/w500' + item.poster_path}/>}>
                            <OverviewPopover content={item.overview} text={item.original_name} arrowPointAtCenter />
                            <p>First Air Date : {item.first_air_date}</p>
                            
                        </Card>
                    </List.Item>
                    )}
                />
                
            </div>
        )
    }
}
