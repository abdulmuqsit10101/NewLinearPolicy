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
      selected_option: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {options} = this.state;
    const value = this.refs.selectBox.value;
    const selected = options.filter(option => (option.val === value));
    const remaining = options.filter(option => (option.val !== value));
    this.setState({selected_option: selected[0], options: remaining});
  };

  render() {

    const {options, selected_option} = this.state;

    return (
      <>
        <div className="container">
          <NewLinearPolicy policy={selected_option}/>
          <div className="add-new-wrapper">
            <h1>Add New</h1>
            <form>
              <select ref="selectBox" defaultValue={'option 1'}>
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
