import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const theme = getMuiTheme({
  palette: {
    textColor: '#525c65',
  },
  TextField: {
      zIndex: 1,
  },
   appBar: {
       zIndex: 5,
       width: '100%',
   },
});
