import React from 'react';
import AutoComplete from 'components/AutoComplete';
import PropTypes from 'prop-types';
// Material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
// Algolia
import { InstantSearch, Configure } from 'react-instantsearch/dom';
// style
import 'react-instantsearch-theme-algolia/style.css';
import '!!style-loader!css-loader!./style.css';
import { style } from './style';

const iconStyles = {
  marginRight: 24,
  height: 45,
  width: 70,
  overflow: 'visible !important',
};

class TopNav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    windowWidth: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return (
      <AppBar
        className="top-nav"
        style={style.appBar}
        titleStyle={this.state.windowWidth < 768 ? style.smallScreenStyle : style.largeScreenStyle}
        title={
          <div className='home-icon'>
            <HomeIcon style={iconStyles} />
            <span className='first'>Deals</span>
            <span className='second'>Expert</span>
          </div>
        }
        iconStyleLeft={style.iconStyleLeft}
        showMenuIconButton={this.state.windowWidth < 768}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
      >
        <div className="large-screen-wrapper">
          <InstantSearch
            appId="YNZ7XXV49B"
            apiKey="90550ee45080bb58130f0ac76a4e28f5"
            indexName="Products"
          >
            <AutoComplete />
            <Configure hitsPerPage={1} />
          </InstantSearch>
        </div>
      </AppBar>
    );
  }
}

TopNav.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired,
};

export default TopNav;

const HomeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 70 70">
    <svg display="block" version="1.1" viewBox="0 0 225 150" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="evenodd">
        <path d="m178.85 81.928c0 0.843 0.09 1.188 0.2 0.766 0.111-0.421 0.111-1.111 0-1.533-0.11-0.422-0.2-0.077-0.2 0.767m136.75 110.62c1e-3 2.41 0.074 3.34 0.163 2.066 0.089-1.273 0.088-3.244-2e-3 -4.381-0.09-1.136-0.163-0.095-0.161 2.315m-106.06 19.82c1.394 0.088 3.563 0.087 4.819-1e-3 1.257-0.089 0.116-0.16-2.535-0.159-2.65 1e-3 -3.678 0.073-2.284 0.16" fill="#555"/>
        <path d="m247.61 60.588c-0.663 0.799-1.581 12.123-1.028 12.677 0.238 0.238 2.176 0.664 4.307 0.946l3.875 0.514-0.123 1.52c-0.124 1.552-1.479 9.814-3.408 20.798-0.593 3.373-1.076 6.598-1.074 7.166s-0.494 3.821-1.104 7.229c-1.438 8.036-2.761 15.816-3.065 18.025-0.133 0.964-0.618 3.921-1.077 6.572s-1.327 7.777-1.927 11.391c-0.601 3.615-1.508 9.032-2.016 12.039-1.079 6.387-1.11 6.316 3.066 6.801 3.099 0.359 3.391 0.212 3.724-1.878 0.143-0.895 0.721-3.698 1.285-6.228 1.71-7.679 3.522-16.062 6.581-30.449 0.563-2.651 1.536-7.185 2.161-10.077 0.625-2.891 1.647-7.623 2.27-10.515 2.124-9.854 3.224-14.388 3.566-14.703 0.303-0.28 9.296 0.793 9.706 1.158 0.161 0.144-0.81 3.465-2.81 9.602-0.549 1.687-2.016 6.32-3.26 10.296-2.126 6.793-7.011 22.173-9.533 30.011-0.62 1.928-1.569 4.885-2.109 6.572s-1.914 5.963-3.055 9.504c-2.423 7.519-2.424 7.51 1.109 8.205 3.161 0.622 3.985 0.19 4.848-2.538 0.277-0.874 0.994-2.773 1.593-4.218 0.6-1.446 1.459-3.516 1.908-4.601 1.016-2.448 4.108-10.285 5.445-13.8 0.55-1.446 1.4-3.615 1.889-4.819 0.488-1.205 1.513-3.768 2.277-5.696s1.743-4.392 2.176-5.476c0.433-1.085 1.608-4.042 2.612-6.572s2.117-5.259 2.473-6.064c0.357-0.805 1.339-3.269 2.183-5.476 0.843-2.207 1.911-4.9 2.372-5.985 4.52-10.629 7.387-18.175 7.043-18.538-0.186-0.195-2.188-0.535-4.45-0.754-2.263-0.219-6.96-0.798-10.439-1.287-3.48-0.488-7.078-0.889-7.996-0.889-2.128 0-2.153 0.406 0.769-12.306 1.536-6.684 1.426-6.965-2.738-6.977-1.161-3e-3 -5.462-0.395-9.558-0.87-8.902-1.032-7.899-0.996-8.468-0.31m-104.78 0.608c-3.494 0.342-7.371 0.723-8.616 0.846-3.187 0.316-3.161-0.514-0.369 11.811 1.539 6.792 1.508 7.198-0.544 7.2-0.904 2e-3 -4.305 0.401-7.558 0.889-3.253 0.487-7.86 1.062-10.239 1.278-6.033 0.546-5.863-0.287-1.937 9.442 0.854 2.115 1.687 4.258 4.001 10.295 0.601 1.567 1.714 4.327 2.474 6.134s1.543 3.779 1.74 4.381c0.198 0.602 1.094 2.87 1.991 5.038 0.898 2.169 1.988 4.831 2.421 5.915 1.382 3.454 3.535 8.896 4.593 11.61 2.355 6.042 2.844 7.259 5.016 12.486 2.459 5.918 3.73 9.117 5.41 13.613 2.25 6.023 2.215 5.994 6.086 5.171 3.599-0.766 3.651 0.147-0.748-13.088-0.52-1.566-1.471-4.524-2.113-6.572-0.641-2.048-2.139-6.78-3.329-10.515-1.189-3.735-3.088-9.748-4.218-13.362-2.37-7.576-6.011-18.86-7.424-23.001-0.534-1.567-1.268-3.857-1.631-5.091l-0.661-2.242 4.303-0.715c6.258-1.039 5.891-1.151 6.662 2.024 0.845 3.482 3.985 17.965 6.246 28.806 2.733 13.107 3.397 16.251 4.353 20.591 0.557 2.53 1.543 7.065 2.191 10.077s1.508 6.856 1.913 8.543l0.735 3.067 2.207-0.088c5.122-0.204 5.226-0.504 3.499-10.145-0.589-3.288-1.585-9.033-2.213-12.768s-1.514-8.861-1.968-11.391-0.957-5.685-1.116-7.01-0.576-3.79-0.925-5.476c-0.349-1.687-0.82-4.546-1.046-6.353s-0.823-5.75-1.327-8.762c-0.503-3.013-1.407-8.434-2.007-12.049-0.6-3.614-1.473-8.642-1.939-11.172-1.201-6.524-1.499-5.934 3.316-6.571 2.289-0.303 4.162-0.712 4.162-0.909 0-2.519-1.068-11.713-1.408-12.125-0.536-0.65-1.62-0.629-9.983 0.188m-63.707 117.83c-0.391 1.02 0.463 1.844 2.075 2l1.391 0.135v15.318 15.317l-1.667 0.395c-1.465 0.346-1.651 0.534-1.534 1.549l0.134 1.156 9.298 0.118c12.556 0.16 15.726-0.905 20.151-6.766 7.985-10.577 2.261-25.778-11.048-29.338-3.458-0.925-18.436-0.833-18.8 0.116m80.046 0.394c-0.886 0.648-0.228 1.96 0.982 1.96 2.368 0 2.394 0.172 2.394 15.75 0 15.482 0.097 14.854-2.41 15.663-0.855 0.276-1.314 0.716-1.314 1.263 0 0.786 0.378 0.84 5.915 0.84 5.622 0 5.914-0.043 5.914-0.876 0-0.584-0.438-1.023-1.314-1.315-0.723-0.241-1.561-0.597-1.862-0.792-0.422-0.273-0.548-4.073-0.548-16.539 0-12.638-0.12-16.192-0.547-16.218-3.55-0.215-6.714-0.099-7.21 0.264m-60.311 3.07c9.079 5.305 10.431 20.974 2.379 27.587-2.434 1.999-9.288 2.831-12.124 1.471l-1.267-0.607v-14.667-14.666l1.315-0.307c2.53-0.589 7.748 0.05 9.697 1.189m19.919 14.998c-4.203 2.246-5.629 4.848-5.329 9.729 0.417 6.809 9.173 10.589 16.251 7.015 4.102-2.07 3.468-4.497-0.694-2.657-6.979 3.088-13.712-2.949-10.22-9.164 2.399-4.267 8.14-4.623 10.286-0.637 1.352 2.51 0.832 2.826-4.657 2.826h-4.863l0.139 1.205 0.139 1.205 6.352 0.126c8.546 0.169 8.478 0.191 8.239-2.684-0.559-6.743-9.013-10.506-15.643-6.964m22.771-0.445c-1.754 0.896-2.473 1.893-2.087 2.897 0.372 0.971 1.991 0.899 3.588-0.159 4.218-2.794 6.791-0.65 6.791 5.657 0 6.18-2.616 8.781-6.823 6.785-5.11-2.425-2.067-9.4 3.324-7.621 3.483 1.15 4.169-0.857 0.87-2.543-4.727-2.416-11.829 1.457-11.829 6.452 0 5.506 7.928 9.284 12.998 6.193 1.052-0.642 1.44-0.711 1.603-0.287 0.151 0.395 1.251 0.548 3.738 0.52 4.959-0.058 5.758-1.101 2.223-2.904l-1.723-0.879v-5.627c0-6.196-0.357-7.193-3.084-8.603-1.818-0.94-7.656-0.867-9.589 0.119m33.704 0.817c-3.4 3.071-2.164 6.104 3.748 9.198 2.492 1.304 2.603 1.434 2.603 3.05 0 3.756-3.925 3.648-5.691-0.157-1.365-2.938-2.633-2.478-2.633 0.955 0 3.594 1.099 4.428 5.837 4.428 9.337 0 10.336-7.796 1.597-12.463-2.709-1.447-3.371-2.467-2.177-3.354 1.452-1.078 3.338-0.601 4.507 1.14 1.895 2.822 3.844 1.47 2.96-2.053-0.703-2.802-7.92-3.301-10.751-0.744" fill="#ef3e36"/>
        <path d="m205.18 185.1c2e-3 1.687 0.081 2.323 0.176 1.414s0.093-2.289-3e-3 -3.067c-0.097-0.777-0.175-0.034-0.173 1.653m0.037 17.525c1e-3 4.337 0.066 6.052 0.146 3.811s0.079-5.79-1e-3 -7.886-0.145-0.263-0.145 4.075" fill="#556d6d"/>
        <path d="m155.24 49.836c0.834 15.518 1.678 27.64 2.279 32.722 0.112 0.949 0.399 5.287 0.637 9.639s0.831 12.841 1.316 18.865c3.231 40.078 3.909 51.32 3.294 54.599l-0.294 1.57-4.673 0.741c-2.571 0.408-7.236 1.219-10.369 1.802-3.132 0.583-8.554 1.569-12.048 2.19s-8.719 1.602-11.61 2.179c-2.892 0.577-6.588 1.281-8.215 1.564-7.551 1.314-3.382 1.514 26.944 1.292l29.902-0.219 0.148-1.046c0.081-0.575-0.159-6.391-0.533-12.924-0.375-6.534-0.799-16.216-0.944-21.518-0.145-5.301-0.548-14.37-0.896-20.153s-0.841-15.739-1.097-22.125c-0.255-6.385-0.796-17.827-1.203-25.426-0.825-15.434-0.835-15.13 0.496-15.487 1.561-0.418 64.43-0.293 65.098 0.13 0.516 0.326 0.534 1.999 0.12 10.837-0.27 5.747-0.599 14.097-0.73 18.555s-0.332 9.288-0.445 10.734c-0.518 6.611-1.371 24.71-1.755 37.24-0.207 6.765-0.882 20.798-1.736 36.097-0.153 2.73-0.064 4.315 0.264 4.71 0.568 0.684 59.533 0.909 59.533 0.227 0-0.202-1.43-0.621-3.177-0.93-1.747-0.31-4.556-0.842-6.243-1.184-1.687-0.341-4.151-0.816-5.476-1.055-9.3-1.677-32.025-6.315-35.567-7.259-0.551-0.147-0.687-0.548-0.541-1.601 0.364-2.622 1.511-17.153 1.754-22.214 0.132-2.771 0.622-9.376 1.088-14.677s1.041-13.187 1.278-17.525c0.237-4.337 0.72-10.942 1.074-14.677 0.353-3.735 0.855-10.241 1.115-14.458 0.259-4.216 0.673-9.835 0.918-12.486 0.695-7.493 1.644-23.183 1.425-23.549-0.109-0.18-20.72-0.328-45.803-0.328h-45.605l0.277 5.148m16.534 12.561c-0.404 0.488-0.323 4.54 0.363 18.075 0.486 9.596 0.993 20.799 1.128 24.895 0.134 4.096 0.341 9.025 0.46 10.953s0.518 11.095 0.886 20.372c0.978 24.597 1.497 24.157 2.327-1.971 0.261-8.193 0.576-17.065 0.701-19.716 0.125-2.65 0.35-8.269 0.5-12.486s0.498-13.286 0.773-20.153l0.501-12.486 21.003-0.114c14.258-0.078 21.151 0.034 21.464 0.347 0.291 0.291 0.569 5.74 0.754 14.791 0.161 7.881 0.617 20.835 1.012 28.787s0.856 20.258 1.025 27.347c0.222 9.358 0.449 12.936 0.828 13.062 0.751 0.249 0.945-1.568 1.225-11.493 0.255-9.057 0.359-11.619 1.101-27.163 0.241-5.061 0.637-14.918 0.88-21.906 0.242-6.988 0.583-15.17 0.757-18.182s0.32-7.251 0.325-9.42l9e-3 -3.943-28.75-0.112c-24.54-0.096-28.826-0.021-29.272 0.516m25.674 18.947c-0.16 0.16-0.302 1.294-0.314 2.519l-0.023 2.227-2.716 1.314c-5.3 2.565-6.602 5.821-7.117 17.789-0.37 8.602 1.739 15.171 6.481 20.185 0.302 0.32 1.19 1.327 1.973 2.239l1.424 1.658-0.043 14.333c-0.024 7.883-0.202 13.84-0.395 13.238-0.193-0.603-0.37-4.654-0.394-9.004-0.052-9.35 0.152-8.959-4.678-8.959-4.896 0-4.725-0.351-4.443 9.092 0.361 12.1 2.213 16.384 8.101 18.739l1.812 0.726 0.13 2.698 0.129 2.699 2.958 0.129 2.957 0.13v-2.811-2.811l1.973-0.552c6.944-1.944 9.3-7.938 8.869-22.563-0.234-7.94-2.345-12.457-9.052-19.369l-1.79-1.846v-13.817c0-7.634 0.172-13.818 0.384-13.818 1.252 0 1.593 1.648 1.806 8.719l0.22 7.273h4.162 4.162l-0.033-7.448c-0.046-10.597-1.871-14.571-7.963-17.339l-2.738-1.245v-2.209-2.209h-2.775c-1.526 0-2.906 0.132-3.067 0.293m-0.335 23.694c-0.026 5.239-0.193 8.627-0.395 7.996-0.426-1.331-0.557-16.383-0.146-16.794 0.161-0.161 0.358-0.293 0.438-0.293 0.081 0 0.127 4.091 0.103 9.091m7.924 38.38c1.145 7.054 0.339 14.742-1.545 14.742-0.111 0-0.194-4.584-0.185-10.186 0.018-10.731 0.515-12.04 1.73-4.556m-8.74 35.093c-0.941 1.135-0.342 2.154 1.519 2.588 2.485 0.579 2.393-0.029 2.4 15.928 8e-3 15.913 0.082 15.459-2.539 15.459-1.417 0-2.127 1.211-1.234 2.103 0.756 0.756 17.336 1.108 29.738 0.63 4.623-0.178 5.757-1.05 3.144-2.419l-1.127-0.591 1.613-1.943c0.887-1.068 1.663-1.996 1.723-2.062 0.06-0.067 0.86 0.795 1.778 1.914l1.668 2.036-1.018 0.767c-2.158 1.628-0.971 2.151 4.677 2.059 6.15-0.1 7.201-0.897 3.349-2.54-1.913-0.817-4.338-3.226-7.034-6.989-0.782-1.092 2.294-4.504 4.816-5.342 4.434-1.472-0.688-3.706-5.922-2.581-1.033 0.222-0.971 1.621 0.105 2.375 0.858 0.601 0.854 0.627-0.248 1.663l-1.12 1.051-0.837-1.089c-1.016-1.323-1.065-1.747-0.2-1.747 0.401 0 0.658-0.409 0.658-1.048 0-1.129-0.899-1.713-1.991-1.294-0.372 0.143-2.392 0.284-4.49 0.315-4.545 0.066-5.537 1.263-1.98 2.389 1.196 0.378 2.26 1.141 3.054 2.19 0.67 0.886 1.569 1.992 1.998 2.459 1.065 1.16 1.058 1.181-1.339 4.057-3.708 4.449-5.329 5.097-5.329 2.131 0-3.527-2.644-4.321-3.522-1.058-0.627 2.326-1.707 2.674-7.725 2.49-6.087-0.185-5.594 0.564-5.766-8.769-0.2-10.813-0.602-9.996 4.919-9.996 4.705 0 5.263 0.197 5.588 1.972 0.107 0.581 0.57 0.923 1.377 1.016l1.217 0.14-0.125-4.521c-0.124-4.49-0.133-4.521-1.215-4.521-0.743 0-1.141 0.278-1.251 0.876-0.324 1.743-0.912 1.972-5.051 1.965-5.205-9e-3 -5.207-0.01-5.441-4.475-0.258-4.917-0.018-5.157 5.161-5.157 4.716 0 5.127 0.143 5.926 2.056 1.307 3.128 3.546 0.813 2.654-2.743-0.585-2.33-0.833-2.38-11.839-2.38-8.391 0-10.305 0.113-10.739 0.636m116.76 8.674c-0.093 0.301-0.289 2.02-0.436 3.819-0.309 3.777-0.963 5.011-3.132 5.918-2.103 0.878-2.012 2.569 0.15 2.777l1.423 0.137v5.794c0 7.498 0.828 9.621 3.837 9.839 2.84 0.205 6.661-2.69 5.96-4.516-0.317-0.828-1.437-0.822-2.542 0.014-2.188 1.655-2.435 1.121-2.435-5.249v-5.891l2.3-0.133c3.748-0.215 3.771-2.434 0.027-2.629l-2.546-0.132-0.124-5.148-0.123-5.148h-1.095c-0.603 0-1.171 0.247-1.264 0.548m-57.416 9.671c-2.754 1.257-3.12 3.27-0.496 2.723 4.173-0.87 4.499-0.832 6.193 0.721 4.807 4.405 0.737 14.251-5.204 12.587-3.194-0.895-3.779-2.318-3.779-9.184 0-6.806-0.112-7.059-2.777-6.258-0.762 0.229-2.075 0.266-2.919 0.082-3.358-0.735-4.451 1.562-1.179 2.477 2.408 0.673 2.48 0.951 2.487 9.689 8e-3 9.496-0.134 10.353-2.03 12.248-1.919 1.92-1.852 2.374 0.352 2.374 3.309 0 6.066-4.159 6.066-9.15v-1.752l1.862 1.065c7.886 4.509 17.179-5.096 12.924-13.359-1.996-3.879-7.708-5.996-11.5-4.263m20.372-0.012c-4.749 2.293-6.313 4.363-6.496 8.599-0.347 8.042 8.12 12.775 15.974 8.929 4.751-2.327 3.961-4.3-1.024-2.558-8.658 3.024-14.677-6.402-7.438-11.646 2.841-2.058 6.518-1.434 7.958 1.351 1.472 2.847 1.215 3.039-4.264 3.176-4.711 0.119-4.935 0.167-5.067 1.095-0.193 1.358 0.86 1.533 8.206 1.363 6.913-0.16 7.255-0.31 6.812-2.991-0.966-5.847-9.197-9.955-14.661-7.318m26.628 0.177c-0.391 0.434-1.216 1.676-1.835 2.76-0.904 1.585-1.125 1.773-1.129 0.957-0.012-2.243-0.618-2.626-4.044-2.556-3.808 0.078-4.679 1.113-1.91 2.27l1.567 0.655v5.478 5.477l-1.533 0.732c-1.43 0.681-2.162 2.261-1.095 2.363 4.77 0.459 9.868 0.056 9.992-0.79 0.104-0.716-0.212-1.034-1.424-1.434-3.186-1.052-1.384-8.074 3.206-12.495 2.73-2.63 2.874-3.872 0.47-4.074-1.067-0.089-1.778 0.117-2.265 0.657" fill="#6d6e71"/>
        <path d="m183.93 58.16c8.512 0.066 22.313 0.066 30.668 0 8.356-0.067 1.392-0.121-15.475-0.121-16.868 0-23.704 0.054-15.193 0.121m3.246 46.112c0 0.843 0.09 1.188 0.201 0.766 0.11-0.421 0.11-1.111 0-1.533-0.111-0.422-0.201-0.077-0.201 0.767m81.052 101.64c0 0.843 0.09 1.188 0.2 0.766 0.11-0.421 0.11-1.111 0-1.533s-0.2-0.077-0.2 0.767" fill="#5e5e68"/>
      </g>
    </svg>
  </SvgIcon>
);