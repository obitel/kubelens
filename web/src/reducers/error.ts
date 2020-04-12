/*
MIT License

Copyright (c) 2020 The KubeLens Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { Reducer } from 'redux';
import { ErrorActions, ErrorActionTypes } from '../actions/error';

export interface IErrorState {
  readonly apiOpen: boolean,
  readonly status?: number,
  readonly statusText?: string,
  readonly message?: string
}

const INITIAL_STATE: IErrorState = {
  apiOpen: false,
  status: undefined,
  statusText: undefined,
  message: undefined
};

export const errorReducer: Reducer<IErrorState, ErrorActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {

    case ErrorActionTypes.OPEN_API_ERROR_MODAL: {
      return {
        ...state,
        apiOpen: true,
        status: action.status,
        statusText: action.statusText,
        message: action.message
      }
    }

    case ErrorActionTypes.CLOSE_API_ERROR_MODAL: {
      return {
        ...state,
        apiOpen: false
      }
    }

    default:
      return state;
  }
};