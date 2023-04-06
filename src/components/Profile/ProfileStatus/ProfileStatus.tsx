import React from "react";


export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode} value={'status'}/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{'status'}</span>
                    </div>
                }
            </div>
        )
    }
}