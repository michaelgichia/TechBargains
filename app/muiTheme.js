import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
  palette: {
    textColor: '#525c65',
  },
  TextField: {
    zIndex: 1,
  },
  appBar: {
    zIndex: 5,
    width: '100%',
    backgroundColor: '#fff',
  },
  raisedButton: {
    primaryColor: "#1da1f2",
  },
});
