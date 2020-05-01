import React, {Component} from 'react';

export default class NewLinearPolicy extends Component {

  state = {
    data: []
  };

  componentWillReceiveProps(newProps) {
    const array = newProps.policies;
    let newArray = [];
    array && array.map(arrayItem => {
      const item = {...arrayItem, condition: 'greater than', value: 3000};
      newArray.push(item);
    });
    this.setState({data: newArray});
  }

  render() {
    const {data} = this.state;
    console.log('data: ', data);
    return (
      <section id="policy-wrapper">
        <h1>New Linear Policy</h1>

        <div className="table">
          <div className="tr">
            <div>
              <h2>Metric</h2>
            </div>
            <div>
              <h2>Condition</h2>
            </div>
            <div>
              <h2>Value</h2>
            </div>
            <div>
              <h2>Action</h2>
            </div>
          </div>

          {
            data && data.map(obj => {
              const {id, val, condition, value} = obj;
              return (
                <div className="tr" id={id} key={id}>
                  <div>
                    <p>{val}</p>
                  </div>
                  <div>
                    <select defaultValue={condition}>
                      <option>greater than</option>
                      <option>between</option>
                      <option>less than</option>
                      <option>{condition}</option>
                    </select>
                  </div>
                  <div>
                    <input defaultValue={value}/>
                  </div>
                  <div>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div>
          <button className="save-btn">Save</button>
        </div>
      </section>
    )
  }
}

