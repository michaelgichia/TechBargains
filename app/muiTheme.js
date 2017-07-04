import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
  palette: {
    textColor: '#525c65',
  },
  appBar: {
    zIndex: 5,
    width: '100%',
    backgroundColor: '#fff',
  },
  raisedButton: {
    primaryColor: "#1da1f2",
  },
  textField: {
    focusColor: "#1f7dd4",
    hintColor: "rgba(0, 0, 0, 0.61)",
    textColor: "rgba(0, 0, 0, 0.61)",
    floatingLabelColor: "#1f7dd4",

  },
  chip: {
    fontWeight: 600,
  },
});
