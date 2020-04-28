import React, {Component} from 'react';

export default class NewLinearPolicy extends Component {
  render() {
    return (
      <section id="policy-wrapper">
        <div className="container">
          <h1>New Linear Policy</h1>
          <div className="table">
            <div className="tr">
              <div>
                <h2>Metric</h2>
              </div>
              <div>
                <h2>Metric</h2>
              </div>
              <div>
                <h2>Metric</h2>
              </div>
              <div>
                <h2>Action</h2>
              </div>
            </div>
            <div className="tr">
              <div>
                <p>Balance on 30th of month</p>
              </div>
              <div>
                <select>
                  <option>greater than</option>
                  <option>between</option>
                  <option>less than</option>
                </select>
              </div>
              <div>
                <input value={3000} />
              </div>
              <div>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
            <div className="tr">
              <div>
                <p>Balance on 30th of month</p>
              </div>
              <div>
                <select>
                  <option>greater than</option>
                  <option>between</option>
                  <option>less than</option>
                </select>
              </div>
              <div className="min-max">
                <label>
                  <span>
                    Min:
                  </span>
                  <input value={3000} />
                </label>
                <label>
                  <span>
                    Min:
                  </span>
                  <input value={3000} />
                </label>
              </div>
              <div>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
          <div>
            <button className="save-btn">Save</button>
          </div>
          <div className="add-new-wrapper">
            <h1>Add New</h1>
            <div>
            <select>
              <option>Policy</option>
              <option>Policy 2</option>
              <option>Policy 3</option>
            </select>
            <button>
              Add New
            </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

