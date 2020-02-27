const customStyles = {
  indicatorSeparator: () => ({
    display: 'none'
  }),
  input: (provided) => ({
    ...provided,
    marginLeft: 0,
    fontWeight: '600',
    color: 'rgb(54, 54, 54)',
    'line-height': '0.8em'
  }),
  placeholder: (provided) => ({
    ...provided,
    lineHeight: 25,
    padding: '0 6px',
    color: 'rgb(77, 82, 88)',
    fontWeight: '600',
    paddingLeft: 0,
    marginLeft: 0
  }),
  option: (provided, { isFocused, isSelected, isMulti }) => ({
    ...provided,
    'background-color': isSelected ? '#0088ce' : isFocused ? '#def3ff' : '#ffffff',
    'border-color': isSelected ? '#0088ce' : isFocused ? '#bee1f4' : 'transparent',
    'border-style': 'solid',
    'border-width': '1px 0',
    color: isSelected ? '#fff' : isFocused ? '#4d5258' : provided.color,
    padding: '1px 10px',
    fontWeight: '400',
    cursor: 'pointer',
    '&::after': {
      fontFamily: 'FontAwesome',
      color: isMulti && isSelected ? 'white' : null,
      content: isMulti && isSelected ? '" \\f00c "' : null,
      float: isMulti ? 'right' : 'initial'
    }
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'rgb(77, 82, 88)'
  }),
  container: (provided) => ({
    ...provided,
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    padding: 0,
    border: '1px solid transparent',
    'border-color': 'rgb(187, 187, 187)'
  }),
  singleValue: (provided, { selectProps: { isSearchable } }) => ({
    ...provided,
    height: 25,
    minHeight: 20,
    'font-size': 12,
    'line-height': isSearchable ? '1em' : '0.8em',
    marginLeft: 0,
    top: '75%',
    fontWeight: '600',
    color: 'rgb(54, 54, 54)'
  }),
  menu: (provided) => ({
    ...provided,
    background: '#fff',
    margin: 0,
    borderRadius: 0,
    paddingTop: 5,
    paddingBottom: 5
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    'box-shadow': '0 2px 3px rgba(3, 3, 3, 0.1)',
    height: 26,
    minHeight: 20,
    padding: '2px 0',
    'background-color': '#f1f1f1',
    color: '#4d5258',
    'background-image': 'linear-gradient(to bottom, #fafafa 0%, #ededed 100%)',
    'background-repeat': 'repeat-x',
    cursor: 'pointer',
    'white-space': 'nowrap',
    'font-size': 12,
    'border-radius': 1,
    'font-weight': '600',
    '&:hover': {
      'background-color': '#f1f1f1',
      'background-image': 'none',
      'border-color': '#bbbbbb',
      color: '#4d5258'
    }
  }),
  multiValue: (provided) => ({
    ...provided,
    background: 'transparent',
    marginRight: 0,
    '&:nth-last-child(2)': {
      marginRight: 2
    },
    '&:not(:first-child)': {
      '::before': {
        content: '",\\00a0"',
        lineHeight: '2em',
        'font-size': 12,
        paddingLeft: 0,
        paddingRight: 0,
        fontWeight: '600',
        color: 'rgb(54, 54, 54)'
      }
    }
  }),
  multiValueRemove: () => ({
    display: 'none'
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    height: 25,
    minHeight: 20,
    'font-size': 12,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: '600',
    color: 'rgb(54, 54, 54)'
  })
};

export default customStyles;
