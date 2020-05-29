import React, {Component} from 'react';

export default class NewLinearPolicy extends Component {

  state = {
    data: []
  };

  componentWillReceiveProps(newProps) {
    const obj = newProps.policy;
    const {data} = this.state;
    const item = {...obj, condition: 'greater than', value: 100};
    this.setState({data: [...data, item]});
  }

  handleSelect = (e, id) => {
    const {data} = this.state;
    const newVal = e.target.value;
    const currentData = [...data];
    const arrObj = currentData.filter(obj => (obj.id === id))[0];

    //setting value

    console.log('newVal L ', newVal, this.refs);

    if (newVal === 'between') {
      arrObj['value'] = {min: 0, max: 100};
    } else if (newVal === 'less than') {
      arrObj['value'] = 3000;
      if (this.refs.normal) {
        this.refs.normal.value = 3000;
      }
    } else {
      arrObj['value'] = 100;
      if (this.refs.normal) {
        this.refs.normal.value = 100;
      }
    }

    //setting condition
    arrObj['condition'] = newVal;
    const newData = [...data];

    // updating Obj with updated Values.

    var itemIndex;
    newData.map(obj => {
      if (obj.id === id) {
        itemIndex = newData.indexOf(obj);
      }
    });

    newData[itemIndex] = arrObj;
    this.setState({data: newData});
  };

  handleInput = (e, id) => {

    const {data} = this.state;

    const inputValue = Number(e.target.value);

    //TODO: find out a spread operator issue down below. For You ;)
    const inputName = e.target.name;
    const currentData = [...data];
    const currentObj = currentData.filter(obj => (obj.id === id))[0];
    const currentValue = currentObj.value;

    if (inputName) {
      currentObj.value = {...currentValue, [inputName]: inputValue};
    } else {
      currentObj.value = inputValue;
    }
  };

  handleSave = () => {
    console.log('this.state = ', this.state.data);
  };

  render() {
    const {data} = this.state;
    const {handleSelect, handleSave} = this;
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
                          <input type="number" name={"min"} onChange={(e) => this.handleInput(e, id)}
                                 defaultValue={value.min}/>
                        </label>
                        <label>
                      <span>
                        Max:
                      </span>
                          <input type="number" name={"max"} onChange={(e) => this.handleInput(e, id)}
                                 defaultValue={value.max}/>
                        </label>
                      </div>
                      :
                      <div>
                        <input ref="normal" type="number" onChange={(e) => this.handleInput(e, id)}
                               defaultValue={value}/>
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

