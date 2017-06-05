/*
 *
 * BannerDetail actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';
import axios from 'axios';
import Auth from '../Utils';


// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;


export function deleteBanner() {
  return {
    type: DEFAULT_ACTION,
  };
}
