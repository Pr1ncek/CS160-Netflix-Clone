import React, { Component } from 'react';

export default class Comments extends Component {
  state = {
    comment: ''
  };

  render() {
    return (
      <div className="mt-5 mb-4">
        <form>
          <div class="form-group">
            <textarea class="form-control" id="comment" rows="4" placeholder="Leave a review..." />
          </div>
          <button className="btn btn-danger w-100">Add Review</button>
        </form>
      </div>
    );
  }
}
