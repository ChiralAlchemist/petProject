import React, { Component } from 'react';


const Grid = React.createClass({

    render () {
    console.log(this.props)
    return (
    <div>
        <table>
                {
                    this.props.board.map((row,xIndex) => {
                        console.log(row)
                        return (
                            <tr> 
                                { 
                                    //row[0]
                                    row.map((value, yIndex) => {
                                        return <Cell location = {[xIndex,yIndex] } value={value}/>
                                    })
                                }
                            </tr>
                        );
                    })
                }
        </table>
    </div>
    );
    }     
});

const Cell = React.createClass({
    render() {
        return (
            <td onClick = { () => {
                store.dispatch({
                    type: 'togglePiece',
                    x: this.props.location[1],
                    y: this.props.location[0] 
                })
            }
            }>
                 {this.props.value }
                 
            </td>
        );
    }
})

export default Grid;
