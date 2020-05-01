import React from "react";
import NewLinearPolicy from './policy_list.js';

export default class PolicyAddition extends React.Component {

  constructor() {
    super();
    this.state = {
      options: [
        {id: 1, val: 'policy 1'},
        {id: 2, val: 'policy 2'},
        {id: 3, val: 'policy 3'},
        {id: 4, val: 'policy 4'}
      ],
      selected_options: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {options} = this.state;
    const value = this.refs.selectBox.value;
    const selected = options.filter(option => (option.val === value));
    const remaining = options.filter(option => (option.val !== value));
    this.setState({selected_options: [...this.state.selected_options, selected[0]], options: remaining}, () => {console.log('Remaining : ', this.state.options)});
  };

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({current: val});
  };

  render() {

    const {options, selected_options} = this.state;

    return (
      <>
        <div className="container">
          <NewLinearPolicy policies={selected_options} />
          <div className="add-new-wrapper">
            <h1>Add New</h1>
            <form>
              <select ref="selectBox" onChange={(e) => this.handleChange(e)} defaultValue={'option 1'}>
                {
                  options.map(opt => {
                    return (
                      <option key={opt.id}>{opt.val}</option>
                    )
                  })
                }
              </select>
              <button onClick={this.handleSubmit}>
                Add New
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
