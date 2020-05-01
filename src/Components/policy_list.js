import React, {Component} from 'react';

export default class NewLinearPolicy extends Component {

  state = {
    data: []
  };

  componentWillReceiveProps(newProps) {
    const obj = newProps.policy;
    const {data} = this.state;
    const item = {...obj, condition: 'greater than', value: 3000};
    this.setState({data: [...data, item]});
  }

  handleSelect = (e, id) => {
    const {data} = this.state;
    const newVal = e.target.value;
    const currentData = [...data];
    const arrObj = currentData.filter(obj => (obj.id === id))[0];
    arrObj['condition'] = newVal;
    console.log('arrObj', arrObj);
    const newData = [...data];
    let itemIndex;
    newData.map(item => {
      if (item.id === id) {
        itemIndex = newData.indexOf(item);
      }
    });
    newData[itemIndex] = arrObj;
    this.setState({data: newData});
  };

  handleSave = () => {
    console.log('this.state = ', this.state);
  };

  render() {
    const {data} = this.state;
    const {handleSelect, handleSave} = this;
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
                    <select value={condition} onChange={(e) => handleSelect(e, id)}>
                      <option>greater than</option>
                      <option>between</option>
                      <option>less than</option>
                    </select>
                  </div>
                  {
                    condition === 'between' ?
                      <div className="min-max">
                        <label>
                      <span>
                        Min:
                      </span>
                          <input defaultValue={0}/>
                        </label>
                        <label>
                      <span>
                        Max:
                      </span>
                          <input defaultValue={0}/>
                        </label>
                      </div>
                      :
                      <div>
                        <input defaultValue={value}/>
                      </div>
                  }
                  <div>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </section>
    )
  }
}

