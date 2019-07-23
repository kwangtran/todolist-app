import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    showLevelElement(level) {
        let elmLevel = <span className="label label-default">Small</span>;
        if (level === 1) {
            elmLevel = <span className="label label-info">Medium</span>;
        }
        if (level === 2) {
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }

    handleEdit = (item) => {
        this.props.onClickEdit(item);
        // console.log('test', item)
    }
    handleDelete = (id) => {
        // this.setState({
        //     idItemDelete: id
        // })
        // console.log('idtem xoa = ', id)
        this.props.onClickDelete(id);
    }
    render() {
        const { item } = this.props;
        const { index } = this.props;
        // console.log(item);

        return (
            <tr>
                <td className="text-center">{index}</td>
                <td>{item.name} - {item.id}</td>
                <td className="text-center">{this.showLevelElement(item.level)}</td>
                <td>
                    <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}
